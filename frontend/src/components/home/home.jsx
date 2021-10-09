import React from 'react';
import Login from '../home/login';
import LandingPage from '../mainpage/landingpage';
import { connect } from 'react-redux';
function Home (props ) {
   
    const check = ()=>{
     const {flags } = props;
        console.log("Props,",props);
        console.log("flags,",flags);

        const access_token = localStorage.getItem('access token');
        if (access_token===null || access_token === undefined ){
            return <LandingPage/>
        }
        else {
            return <LandingPage/>
        }

    }

        return ( 
            <React.Fragment>
                {check()}
            </React.Fragment>
         );
}

const mapStateToProps = (state)=> ({
    props : state.userAuth.userToken,
    flags : state.userAuth.flags
});

 
export default connect (mapStateToProps,null)(Home);