import React, { Component } from 'react';
import '../../styles/profile/timelinePost.css';
class TimelinePost extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="post_layout">
                                <div className="post_layout_header">
                                    <div className="sender_info">
                                        <div className="sender_profile_pic1">
                                            <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} 
                                            alt="sender_"/>
                                        </div>
                                        <div className="sender_name">
                                            <p>Joseph Genio</p>
                                            <div className="post_set">
                                                <div className="date_posted">
                                                    <small>3h</small>
                                                </div>
                                                <div className="privacy">
                                                    <img src={process.env.PUBLIC_URL+"/images/public.png"} 
                                                    alt="public"/>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div className="poke">
                                    <img src={process.env.PUBLIC_URL+"/images/dot.png"} alt="dot"/>
                                    </div>
                                </div>
                                <div className="post_caption">
                                    <p>Hello Facebook</p>
                                </div>
                                <div className="post_image">
                                    <div className="post_image_holder">
                                    <img src={process.env.PUBLIC_URL+"/images/post.jpg"} alt="post"/>
                                    </div>
                                </div>
                               
                                <div className="reactions">
                                    <div className="like reaction_list">
                                        <img src={process.env.PUBLIC_URL+"/images/like.png"} alt="like"/>
                                        <p>Like</p>
                                    </div>
                                    <div className="comments reaction_list">
                                        <img src={process.env.PUBLIC_URL+"/images/comment.png"} alt="comment"/>
                                        <p>Comment</p>
                                    </div>
                                    <div className="share reaction_list">
                                        <img src={process.env.PUBLIC_URL+"/images/share.png"} alt="share"/>
                                        <p>Share</p>
                                    </div>
                                </div>
                            </div>
            </React.Fragment>
         );
    }
}
 
export default TimelinePost;