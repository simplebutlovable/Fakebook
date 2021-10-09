import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/profile/intro.css';


function Intro(){
   
        return ( 
            <React.Fragment>
                <div className="intro">
                        <div className="intro_header">
                            <h3>Intro</h3>
                            <div className="studied profile_spec">
                                    <img src={process.env.PUBLIC_URL +"/images/studied.png"} alt="studied1"/>
                                    <p>Studies at Bohol Island State University</p>
                                </div>
                                <div className="went profile_spec">
                                    <img src={process.env.PUBLIC_URL +"/images/studied.png"} alt="studied1"/>
                                    <p>Went to baclayon national high school</p>
                                </div>
                            <div className="lives profile_spec">
                                <img src={process.env.PUBLIC_URL+"/images/from.png"} alt="from"/>
                                <p>Lives in Baclayon, Bohol, Philippines</p>
                            </div>
                            <div className="from profile_spec">
                                <img src={process.env.PUBLIC_URL+"/images/location.png"}alt="from"/>
                                <p>From Baclayon, Bohol, Philippines</p>
                            </div>
                                <div className="joined profile_spec">
                                    <img src={process.env.PUBLIC_URL+"/images/joined.png"} alt ="joined"/>
                                    <p>Joined January 2013</p>
                                </div>
                            
                                <div className="edit_details p_options">
                                    <Link to="/" className ="_a">
                                        Edit Details
                                    </Link>
                                </div>
                                <div className="add_hobies p_options">
                                    <Link to="/" className ="_a">
                                        Add Hobies
                                        </Link>
                                </div>
                                <div className="edit_featured p_options">
                                    <Link to="/" className ="_a">
                                        Edit Featured
                                    </Link>
                                </div>
                            </div>
                            <Featured/>
                        </div>
            </React.Fragment>
         );
}


function Featured (){
    return(
        <React.Fragment>
            <div className="featured">
                <div className="featured_list">
                    <img src={process.env.PUBLIC_URL+"/images/1.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/2.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/3.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/4.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/5.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/6.jpg"} alt=""/>
                </div>
            </div>
            <div className="edit_featured">
                    <Link to="/" className="_a" >Edit Featured</Link>
                </div>
        </React.Fragment>
    );
}
 
export default Intro;