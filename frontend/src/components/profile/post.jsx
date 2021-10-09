import React from 'react';
import '../../styles/profile/post.css';

function Post (){
   
        return ( 
            <React.Fragment>
                <div className="post_wall">
                    <div className="sender">
                     
                            <div className="sender_profile_pic">
                                <img src={process.env.PUBLIC_URL + "/images/edited.jpg"} alt="profile"/>
                            </div>
        
                        <div className="label_send">
                            <p>What's on your mind?</p>
                        </div>
                    </div>
                <div className="line_breaker1"></div>
                    <div className="attachments">
                        <div className="live_video attachment_list">
                            <div className="attachment_wrapper">
                                <img src={process.env.PUBLIC_URL + "/images/live.png"} alt="live"/>
                                <p>Live Video</p>
                            </div>
                        </div>
                        <div className="photos/videos attachment_list">
                            <div className="attachment_wrapper">
                                <img src={process.env.PUBLIC_URL + "/images/photo-video.png"} alt=""/>
                                <p>Photo/Video</p>
                            </div>
                        </div>
                        <div className="life_events attachment_list">
                            <div className="attachment_wrapper">
                                <img src={process.env.PUBLIC_URL + "/images/life.png"} alt="life"/>
                                <p>Life Events</p>
                            </div>
                        </div>
                    </div>
                                
                </div>
            </React.Fragment>
         );
}
 
export default Post;