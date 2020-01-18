import "./posts.scss";
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostLike from './components/PostLike'
import { SpringGrid, makeResponsive } from 'react-stonecutter';
import PostsNavigation from "./components/PostsNavigation";

const Grid = makeResponsive(SpringGrid, {
    maxWidth: 1920,
    minPadding: 100
});

class PostIndex extends Component {

  state = {
    posts: []
  };

  componentDidMount() {
      fetch('/api/v1/posts')
      .then(posts => posts.json())
      .then(posts => {
          this.setState({
              posts: posts
          })
      });
  }

  renderPosts = () => {
      console.log(this.state.posts);
      return this.state.posts.map(post => {
          return (
              <li key={post.id} className={""}>

                      <div className="post-grid-item">
                          <div className={"post-wrapper"}>

                              <Link to={`/show/post/${post.id}`} >
                                <div className={"post-image-placeholder"}>
                                    <img src={post.thumbnail} alt={"post image"} className={"image-fade"}/>

                                    <span className={"tumbnail-hover-info"}>
                                        <span className={"post-hover-avatar"}>
                                            <img src={post.user.avatar_small} alt={"profile avatar"} className={"post-hover-avatar"}/>
                                        </span>
                                        <Link to={`/show/userprofile/${post.user.id}`} className={"post-hover-username"}>
                                            By: {post.user.username}
                                        </Link>
                                    </span>

                                    <div className="post-hover-title-container">
                                        <div className="post-hover-title">{post.title}</div>
                                    </div>

                                </div>
                              </Link>

                              <div className={"level is-mobile post-analytics"}>
                                  <div className={"level-left"}>
                                      <div className={"level-item"}>
                                          <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578191967/UserFluent/Navbar%20Upper%20Icons/meatballs_ahyp2e.svg"} alt={'views'} className={""}/>
                                      </div>
                                  </div>
                                  <div className={"level-right"}>
                                      <div className={"level-item views data"}>
                                          <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1578189381/UserFluent/Navbar%20Upper%20Icons/views_cy9msv.svg'} alt={'views'} className={"views-icon"}/>
                                          &nbsp; {post.views}
                                      </div>
                                      <div className={"level-item likes"}>
                                          <PostLike post_id={post.id} likes={post.likes} liked={post.liked}/>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>

              </li>
          )
      })
  };


  render() {
      return (
          <div className={""}>

              <PostsNavigation/>
              <div className={"nav-spacer"}/>
              <div className={"content-spacer"}/>


              <Grid
                  component="ul"
                  columns={3}
                  columnWidth={370}
                  gutterWidth={20}
                  gutterHeight={20}
                  itemHeight={315}
                  springConfig={{ stiffness: 170, damping: 26 }}
                  className={"posts-container"}
              >

                {this.renderPosts()}

              </Grid>





          </div>
      )
  }

}

export default PostIndex
