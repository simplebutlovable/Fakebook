import React, { useState } from 'react';
import {Link, BrowserRouter as Router } from 'react-router-dom';
import SignUp from './signUp';
import '../../styles/home/login.css';
import Footer from './Footer';
import { fetchLogin } from '../../store/actions/authActions';
import { connect } from 'react-redux';

function Login(props) {
    const [flags, setFlags] = useState({signup_flag: false,response: "", error_flag: false, loading:false });
    const [userInputs, setUserInputs] = useState({username:"",password:"" });

    const handleSignup = () =>{
        setFlags({...flags, signup_flag: true});
        }

    const closeSignUp = () =>{
        setFlags({...flags, signup_flag: false});
        }

    const loginFetch = (e) =>{ 
        e.preventDefault();
       
        if (userInputs.username ==="" || userInputs.password===""){
            setFlags({...flags, error_flag: true, loading: false})
            }   

       const requestOptions = {      
            email: userInputs.username,
            password: userInputs.password
            };

        props.fetchLogin(requestOptions);

     }
    if (flags.signup_flag){
        document.body.classList.add('hold_scroll');
    }
    else{
        document.body.classList.remove('hold_scroll');
    }
     const error_handling = ()=>{
            document.querySelector('input[type=text]').style.border = "1px solid red";
            document.getElementsByClassName('error_message')[0].classList.add('dc');
            document.getElementsByClassName('error_flag')[0].classList.add('dc');     
     }
   
        return ( 
            <React.Fragment>
            <Router>
                {flags.error_flag ? error_handling(): null }
                <div className = "login">    
                    {flags.signup_flag ? <SignUp onClose={closeSignUp}/> : null }
                    <div className="left_page">
                            <h1>fakebook</h1>
                            <p>Connect with friends and the world around you on Fakebook.</p>
                        </div>
                        <div className="right_page">
                            <div className="form_holder">
                                <form >
                                   <div className="username_input">
                                        <input type="text"
                                            placeholder="Email or Phone"
                                            name="username"
                                            autoComplete = "false"
                                            id="username"
                                            onChange={(e)=>setUserInputs({...userInputs, username : e.target.value})}
                                            />
                                        <div className="error_flag">
                                            <img src={process.env.PUBLIC_URL + '/images/error_flag.png'} alt="error" />
                                        </div>
                                </div>

                                  <div className="error_message">
                                        <p>The email or phone number you’ve entered doesn’t 
                                            match any account. <span>Sign up for an account</span>.
                                        </p>
                                  </div>

                                    <input type="password" 
                                        placeholder="Password" 
                                        name="password_login" 
                                        autoComplete = "false"
                                        id="password"
                                        onChange={(e)=>setUserInputs({...userInputs, password: e.target.value})}
                                        />

                                    <div className="submit">
                                        <input 
                                            type="submit"
                                            value = "Login"
                                            className="submit_btn"
                                        onClick={ loginFetch}/>
                                    </div>
                                </form>

                           <div className="forget_holder">
                                <Link to="/" className="a">Forget Password?</Link>
                           </div>

                            <div className="line_breaker"></div>

                            <div className="create" onClick = {handleSignup}>
                                <p>Create New Account</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Footer/> 
                </Router>
        </React.Fragment>
         );
}




export default connect(null, { fetchLogin })(Login);