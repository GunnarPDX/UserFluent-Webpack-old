import "../posts/posts.scss";
import "./profile.scss"
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostLike from "../posts/components/PostLike";
import { SpringGrid, makeResponsive } from 'react-stonecutter';
import ShowProfileInfo from "./components/ShowProfileInfo";

const Grid = makeResponsive(SpringGrid, {
    maxWidth: 1920,
    minPadding: 100
});

class ShowProfile extends Component {

    state = {
        posts: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let user_id = this.props.match.params.id;
        fetch('/api/v1/users/' + user_id)
            .then(posts => posts.json())
            .then(posts => {
                this.setState({
                    posts: posts
                })
            })
    }

    renderPosts = () => {
        return this.state.posts.map(post => {
            return (
                <div key={post.id}>

                    <div className="post-grid-item">
                        <div className={"post-wrapper"}>

                            <Link to={`/show/post/${post.id}`} >
                                <div className={"post-image-placeholder"}>
                                    <img src={post.thumbnail} alt={"post image"} className={"image-fade"}/>

                                    <span className={"tumbnail-hover-info"}>
                                        <span className={"post-hover-avatar"}>
                                            <img src={post.user.avatar_small} alt={"profile avatar"} className={"post-hover-avatar"}/>
                                        </span>
                                        <Link to={'/'} className={"post-hover-username"}>
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

                </div>
            )
        })
    };

    render() {
        return (
            <div>

                <div className={"row"}>
                    <ShowProfileInfo user_id={this.props.match.params.id}/>
                </div>
                <div className={"content-spacer"}/>

                <div className={"row"}>


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

            </div>
        )
    }
}

export default ShowProfile