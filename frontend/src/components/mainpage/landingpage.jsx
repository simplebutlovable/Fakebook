import React  from 'react';
import { Route , Switch } from 'react-router-dom';
import Header from '../home/header';
import MainProfile from '../profile/mainProfile';
import MainPage from './mainPage';



function LandingPage (){
 
        return ( 
            <React.Fragment>
                  <Header/>              
                        <Switch>
                            <Route path ="/profile" component ={MainProfile}/>
                            <Route path="/" exact component = {MainPage} />
                        </Switch>

            </React.Fragment>
         );
}
 
export default LandingPage;