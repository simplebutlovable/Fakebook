import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/profile/profileMenu.css';
import { connect } from 'react-redux';


function ProfileMenu(props) {

    const [scrollFlag, setScrollFlag] = useState({
        flag : false
    });

    const {flag} = scrollFlag;
    const {props:userInfo} = props;
    var scrollObject = {};
    window.onscroll = getScrollPosition;
        
    function getScrollPosition(){
        scrollObject = {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
        // If you want to check distance
        if(scrollObject.y > 478) {
            setScrollFlag({flag : true})    
        }
        else{
            setScrollFlag({flag: false})
        }
    }

        return ( 
            <React.Fragment>
           
                <div className="menu_cover">
                    <div className="main_menu">
                        <div className="left_main_menu">
                            {flag ? <UsernameLoader data={userInfo} /> : <MenuLoader/>}
                        </div>
                        <div className="right_main_menu">
                            <div className="edit_profile">
                                <img src={process.env.PUBLIC_URL+"/images/edit.png"} alt="_edit"/>
                                <p>Edit Profile</p>
                            </div>
                            <div className="view_as">
                            <img src={process.env.PUBLIC_URL+"/images/view_as.png"} alt="view_as"/>
                            </div>
                            <div className="profile_search">
                                <img src={process.env.PUBLIC_URL+"/images/fb_search.png"} alt="fb_search"/>
                            </div>
                            <div className="profile_more">
                            <img src={process.env.PUBLIC_URL+"/images/dot.png"} alt="dot"/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
}


function MenuLoader (props){
    return (
        <React.Fragment>
            <div className="menu_holder active_menu">
                <div className="posts menu_list">
                    <p>Posts</p>
                </div>
            </div>
            <div className="menu_holder">
                <div className="about menu_list">
                    <p>About</p>
                </div>
            </div>
            <div className="menu_holder">
                <div className="friends menu_list">
                    <p>Friends</p>
                </div>
            </div>
            <div className="menu_holder">
                <div className="photos menu_list">
                    <p>Photos</p>
                 </div>
            </div>
            <div className="menu_holder">
                <div className="archives menu_list">
                    <p>Archives</p>
                </div>
            </div>
            <div className="menu_holder">
                <div className="more_menu_list">
                    <p>More</p>
                    <img src={process.env.PUBLIC_URL + "/images/logout.png"} alt="logout"/>
                </div>
            </div>
        </React.Fragment>
    );
}

function UsernameLoader (data){
    
    const { data:userInfo} = data;
    const {first_name, last_name} = userInfo

    const style = {
        margin:"0 0.3rem",
        fontSize: "17px",
        fontWeight:"500",
        textDecoration: "none",
        color: "black"
    }

   return (
    <React.Fragment>
        <div className="user_content" style={{display:"flex",alignItems:"center"}}>
            <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} alt="prof" 
                style={{
                    width : "50px", 
                    height:"50px",
                     borderRadius:"50%"}}/>
            <div className="f_name"style={{display:"flex", marginLeft:"0.5rem"}}>
                <Link to="/profile" style={style}>{ first_name }&nbsp;{ last_name }</Link>
            </div>
        </div>
</React.Fragment>
   );
}
const mapStateToProps = state => ({
    props : state.userAuth.userInfo
});


export default connect(mapStateToProps,null)(ProfileMenu);