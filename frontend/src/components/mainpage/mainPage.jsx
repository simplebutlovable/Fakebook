import React from 'react';
import Shortcuts from './shortcuts';
import { connect } from 'react-redux';


function MainPage (props){

        return ( 
            <React.Fragment>
        
                <div className="content-divider" 
                style={{
                        width: "99%",
                        margin:"0 auto", 
                        padding:0, 
                        boxSizing:"border-box",
                        display: "flex",
                        justifyContent:"space-between", 
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
                        }}>
                    <Shortcuts/>
                </div>
            </React.Fragment>
         );
}
const mapStateToProps = state =>(
    {
        props : state.userAuth.userToken
    }
);
 
export default connect (mapStateToProps, null)(MainPage);