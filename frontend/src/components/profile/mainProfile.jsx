import React  from 'react';
import '../../styles/profile/mainProfile.css';
import ProfileMenu from './profileMenu';
import Intro from './intro';
import TimelinePost from './timelinePost';
import Post from './post';
import PostSettings from './postSettings';
import Photos from './photos';
import { connect } from 'react-redux';

function MainProfile (props) {
 
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

    const {props:info} = props;
    const {first_name, last_name} = info;
      
        return ( 
            <React.Fragment>
            <div className="main_page_body">
                <div className="profile_info">   
                    <div className="cover_frame">
                        <div className="cover_photo">
                            <img src={process.env.PUBLIC_URL + "/images/cc.jpg"} alt="cover"/>
                        </div>
                    </div>
                    <div className="profile_pic">
                
                        <img src={process.env.PUBLIC_URL + "/images/edited.jpg"} alt="profile"/>
                    </div>
                </div>
                { console.log("praps",props) }
                <div className="profile_name">
                    <div className="first_profile">
                        <p>{first_name}</p>
                    </div>
                    <div className="last_profile">
                        <p>{last_name }</p>
                    </div>
                </div>
                <div className="bio">
                    <p>Add Bio</p>
                </div>
                <ProfileMenu/>

                <div className="wall_padding">
                    <div className="wall">
                        <div className="left_side">
                            <Intro/>
                            <Photos/>
                        </div>
                        <div className="timeline">
                            <Post/>
                            <PostSettings/>
                            <TimelinePost/>
                        </div>
                    </div>
                </div>
                
            </div>

            </React.Fragment>
         );
}
const mapStateToProps = state =>({
        props : state.userAuth.userInfo
    }
);


export default connect(mapStateToProps,null)(MainProfile);