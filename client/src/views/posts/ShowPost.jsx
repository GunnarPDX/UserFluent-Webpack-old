import "./posts.scss";
import "./showpost.scss";

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CommentPrompt from './components/CommentPrompt'
import PostLike from './components/PostLike'
import DestroyPost from './components/DestroyPost'
import DestroyComment from "./components/DestroyComment";

class ShowPost extends Component {

    state = {
        post: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let post_id = this.props.match.params.id;
        fetch('/api/v1/posts/' + post_id)
            .then(post => post.json())
            .then(post => {
                this.setState({
                    post: [post]
                })
            });
    }

    renderPost = () => {
        console.log(this.state.post);
        return this.state.post.map(post => {
            return (
                <div key={post.id} className={"uf-fade-in"}>

                    {/*
                    <div className={"row"}>
                        <div className={"showpost-title"}>{post.title}</div>
                    </div>
                    */}

                    <div className={"columns"}>

                        <div className="column is-1"/>
                        <div className="show-post-container column is-6">

                            <div className="post-box">

                                <div>
                                    <img src={post.full_image} alt={'post image'}/>
                                </div>

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




                            <div className={"level is-mobile post-box"}>
                                <div className={"level-left"}>
                                    <div className={"level-item"}>
                                        <img src={post.user.avatar_small} alt={"user profile"} className={"post-hover-avatar"}/>
                                    </div>
                                    <div className={"level-item"}>
                                        <Link to={`/show/userprofile/${post.user.id}`}>
                                            <div className="show-post-username">By: {post.user.username}</div>
                                        </Link>
                                        <div className="show-post-time"> &nbsp; At: {post.time} </div>
                                    </div>
                                </div>
                                <div className={"level-right"}>
                                    <div className={"level-item"}>
                                        <button className={"button"}> Follow </button>
                                    </div>
                                </div>
                            </div>





                            <div className={"post-box"}>

                                <div>
                                    <div className="bold-title"> {post.title} </div>
                                </div>

                                <div className={"post-main-content"}>
                                    {post.content}
                                </div>

                            </div>


                        </div>

                        <div className={"show-comments-container column is-4"}>
                            <div className={"post-box"}>
                                <div className="">
                                    <CommentPrompt post_id={post.id}/>
                                </div>
                            </div>
                            <div className={"post-box"}>
                                <div className={"comments-list-box"}>
                                    {this.renderComments(post)}
                                </div>

                            </div>
                        </div>
                        <div className="column is-1"/>

                    </div>
                </div>
            )
        })
    };

    renderComments = (post) => {

        return post.comments.map(comment => {
            return (
                <div key={comment.id}>

                    <div className="comment-box">

                        <div className={"comment-info-container"}>

                            <div className="comment-text-info">By: {comment.user_name}</div>


                            <div className={"comment-dropdown"}>

                                <Link to={'/'} className={"comment-info-ellipsis"}>
                                    <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578191967/UserFluent/Navbar%20Upper%20Icons/meatballs_ahyp2e.svg"} alt={"ellipsis"} className={""}/>
                                </Link>

                                <div className="comment-dropdown-content">
                                    <button href="#">flag</button>
                                    <br/>
                                    <DestroyComment session_user_id={post.session_user_id} owner_id={comment.user_id} comment_id={comment.id} history={this.props.history}/>
                                </div>

                            </div>





                        </div>

                        <div className={"comment-content-background"}>
                            {comment.content}
                        </div>

                    </div>

                </div>
            )
        })
    };

    render() {
        return (
            <div>
                {this.renderPost()}
            </div>
        )
    }

}

export default ShowPost