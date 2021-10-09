import React, { useState, useEffect } from 'react';
import '../../styles/home/signup.css';
import { connect } from 'react-redux';
import { fetchSignup } from '../../store/actions/authActions';


function Signup (props){
    const [dateList, setdateList] = useState({
        monthlist :[
            {id:1, value:"jan", disp:'Jan'},
            {id:2, value:"feb", disp:'Feb'},
            {id:3, value:"mar", disp:'Mar'},
            {id:4, value:"apr", disp:'Apr'},
            {id:5, value:"may", disp:'May'},
            {id:6, value:"jun", disp:'Jun'},
            {id:7, value:"jul", disp:'Jul'},
            {id:8, value:"aug", disp:'Aug'},
            {id:9, value:"sep", disp:'Sep'},
            {id:10, value:"oct", disp:'Oct'},
            {id:11, value:"nov", disp:'Nov'},
            {id:12, value:"dec", disp:'Dec'},
        ],
        daylist:[],
        yearlist:[],
    });
    
    const [userInput, setUserInput] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        birthday:"",
        birthmonth:"",
        birthyear:"",
        gender_radio : "",

    });

      
    useEffect (()=>{
        let daylist = [];
        let date = new Date();
        let current_year = date.getFullYear();
        const year_limit = current_year - 115;
        
        for (let id=1; id <= 31; id++){
                daylist.push({id});
            }
                      
            let yearlist = [];
            for(let id = current_year; id >= year_limit; id--){
                yearlist.push({id});              
                }
            setdateList({...dateList, daylist , yearlist })
            
            let c_day = date.getDate();
            let c_month = date.getMonth()+1;
            console.log("Cmonth", c_month);
            setUserInput ({...userInput, birthday:c_day, birthmonth:c_month, birthyear : current_year})
           // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    //Deconstructing userInput state 
    const { first_name, 
            last_name, 
            email, 
            gender_radio, 
            birthday,
            birthmonth,
            birthyear, 
            password} = userInput;

    const handleSignUp = (e)=>{
        e.preventDefault();
        const birthdate = birthmonth +"-"+birthday+"-"+birthyear;
        const firstname = first_name.trim();
        const _email = email.trim();
        const lastname = last_name.trim();
        const gender = gender_radio.trim();
        const requestOptions = ({
            email :_email,
            first_name : firstname,
            last_name : lastname,
            gender,
            password,
            birthdate
        });

        if (userInput.first_name ===""){
           document.getElementById('s_firstname').classList.add('err');
        }
        if(userInput.last_name ===""){
            document.getElementById('s_lastname').classList.add('err');
        }
        if(userInput.email ===""){
            document.getElementById('s_email').classList.add('err');
        }
        if(userInput.password ===""){
            document.getElementById('s_password').classList.add('err');
        }
        if (userInput.gender_radio === ""){
            document.getElementsByClassName('gender_list')[0].classList.add('err');
            document.getElementsByClassName('gender_list')[1].classList.add('err');
            document.getElementsByClassName('gender_list')[2].classList.add('err');
        }

        else if (userInput.first_name !=="" && 
                userInput.last_name !=="" && 
                userInput.email && 
                userInput.password!=="" && 
                userInput.gender_radio!==""){
                    props.fetchSignup(requestOptions);
                }
    }
        return ( 
        
        <div className="signup_cover">
            {console.log("User Input Test:",userInput)}
            {console.log("----looptest----")}
            <div className="form_holder">
                <div className="header">
                    <div className="page_title">
                            <h1>Sign Up</h1>
                            <p>It’s quick and easy</p>
                    </div>
                    <div className="close_btn" onClick = {props.onClose}>
                            <img src={process.env.PUBLIC_URL + '/images/exs.png'} alt="close" />
                    </div>
                </div>
                
                <div className="line_breaker"></div>

                <form action="#" >
                    <div className="full_name">
                        <input  type="text" 
                                name="s_first_name" 
                                id="s_firstname" 
                                placeholder="First Name"
                                onChange={(e)=>setUserInput ({...userInput, first_name: e.target.value})}
                                />
                        <input type="text" 
                                name="s_last_name" 
                                id="s_lastname" 
                                placeholder ="Last Name"
                                onChange={(e)=>setUserInput ({...userInput, last_name: e.target.value})}
                                />
                    </div>
                    <input  type="text" 
                            name="s_email" 
                            id="s_email" 
                            placeholder="Email"
                            onChange={(e)=>setUserInput({...userInput, email : e.target.value})}
                            />
                    <input  type="password" 
                            name="s_password" 
                            id="s_password" 
                            autoComplete = "false" 
                            placeholder="New Password"
                            onChange={(e)=>setUserInput({...userInput, password : e.target.value})}
                            />
                    <p className="label_header">
                            Birthday
                        </p>
                    <div className="birthday">
                {/*birthmonth */}
                        <select name="birthmonth" 
                                id="birthmonth" 
                                onChange = {(e)=>setUserInput({...userInput, birthmonth: e.target.value})}
                                value= {userInput.birthmonth}
                                >
                            {dateList.monthlist.map(month =>(
                                <option key={ month.id } id={ month.id } value={ month.id }>
                                    { month.disp }
                                </option>
                            ))}
                      
                        </select>
                {/* birthdate */}
                        <select name="birthdate" 
                                id="birthdate"
                                onChange = {(e)=>setUserInput({...userInput, birthday : e.target.value})}
                                value= {userInput.birthday}
                                >
                                {dateList.daylist.map(day => (
                                    <option key={ day.id } value={ day.id }>{ day.id }</option>
                                ))}
                      
                        </select>
                {/* birthyear */}
                        <select name="birthyear" 
                                id="birthyear"
                                onChange={(e)=>setUserInput({...userInput, bithyear : e.target.value})}
                                value={userInput.value}
                                >
                            {dateList.yearlist.map(year =>(
                                <option key={ year.id } value={ year.id } id = {year.id}>
                                    { year.id }
                                </option>
                            ))}
                        </select>
                    </div>
                {/*gender */}
                <p className="label_header">
                            Gender
                        </p>
                    <div className="gender">
                
                {/*male */}
                        <div className="male gender_list" 
                            onClick={()=>setUserInput({...userInput, gender_radio : "male"})}>
                            
                            <label htmlFor="male">Male</label>
                            <input type="radio" 
                                    name="gender_choice" 
                                    id="male"
                                    checked = {userInput.gender_radio === 'male'}
                                    onChange = {()=>setUserInput({...userInput, gender_radio : "female"})}
                             />
                        </div>

                {/*female */}
                        <div className="female gender_list" 
                             onClick={()=> setUserInput({...userInput, gender_radio : "female"})}>
                            <label >Female</label>
                            <input type="radio" 
                                    name="gender_choice" 
                                    id="female" 
                                    checked = {userInput.gender_radio === 'female'}
                                    onChange = {()=>setUserInput({...userInput, gender_radio : "female"})}
                             />
                        </div>
        
                {/* others */}
                        <div className="others gender_list" 
                             onClick={()=>setUserInput({...userInput, gender_radio : "others"})}>
                            
                            <label >Others</label>
                            
                            <input type="radio" 
                                    name="gender_choice" 
                                    id="others" 
                                    checked = {userInput.gender_radio === 'others'}
                                    onChange = {()=>setUserInput({...userInput, gender_radio : "female"})}
                             />
                        </div>
                    </div>
                    <div className="terms">
                        <p>
                        By clicking Sign Up, you agree to our <a href="/"> Terms </a>, 
                        <a href="/">Data Policy</a> and <a href="/">Cookies Policy</a>.
                        You may receive SMS Notifications from us and can opt out any time.
                        </p>
                    </div>
                    <div className="submit_holder">
                        <input type="submit" value="Sign Up" onClick={handleSignUp}/>
                    </div>
                </form>

</div>
        </div>
        
         );
}
 
export default connect (null, { fetchSignup })(Signup);