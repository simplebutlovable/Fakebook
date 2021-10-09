import React from 'react';
import '../../styles/profile/photos.css';

function Photos (){
    return (
        <React.Fragment>
            <div className="header_content">
                <div className="header">
                    <h3>Photos</h3>
                    <p>See All Photos</p>
                </div>
                <div className="image_tile">
                    <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} alt=""/>
                    <img src={process.env.PUBLIC_URL+"/images/edited.jpg"} alt=""/>
                </div>
            </div>
    </React.Fragment>
    );
}

export default Photos;