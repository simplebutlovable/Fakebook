import React from 'react';
import '../../styles/profile/postSettings.css';

function PostSettings (){ 
    return ( 
        <React.Fragment>
            <div className="post_settings">
                <div className="post_settings_content">
                    <div className="post_settins_header">
                        <h3>Post</h3>
                        <div className="filters">
                            <div className="filter _f">
                                <img src={process.env.PUBLIC_URL +"/images/filter.png"} alt="filter"/>
                                <p>Filter</p>
                            </div>
                            <div className="manage _f">
                                <img src={process.env.PUBLIC_URL+ "/images/manage.png"} alt="manage"/>
                                <p>Manage Posts</p>
                            </div>
                        </div>
                    </div>
                    <div className="_l_b"></div>
                    <div className="list_type">
                        <div className="list_view _a">
                            <img src={process.env.PUBLIC_URL+"/images/list.png"} alt="list"/>
                            <p>List View</p>
                        </div>
                        <div className="grid_view _i">
                            <img src={process.env.PUBLIC_URL+"/images/grid.png"} alt="grid"/>
                            <p>Grid View</p>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
         );
}
 
export default PostSettings;