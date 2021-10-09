import React, { useState } from 'react';
import '../../styles/mainpage/shortcuts.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



function Shortcuts (props){
    const [menuExpansion, setmenuExpansion] = useState ({
        expandedState: false ,
        expandedShortcut : false
    });

    console.log("Child PRops: ",props.userInfo)

    const expandMenu = ()=>{
        menuExpansion.expandedState?
        setmenuExpansion({...menuExpansion,expandedState:false}):
        setmenuExpansion({...menuExpansion,expandedState:true})
    }

    const expandShortcuts = ()=>{
        menuExpansion.expandedShortcut?
        setmenuExpansion({...menuExpansion,expandedShortcut:false}):
        setmenuExpansion({...menuExpansion,expandedShortcut:true})
    }

    
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

  
        return ( 
            <React.Fragment>
              
             
                <div className="shortcut_cover">
               
                {console.log(menuExpansion)}
                    <div className="shortcuts">
                  
                        <div className="hidden_spacer"></div>
                        <Link to={"/"+props.userInfo.username+"/"} className="text-link" >
                            <div className="user_profile m1">     
                            <img src={process.env.PUBLIC_URL +"/images/edited.jpg"} alt="profile_pic"/>
                                <h3>Jose Rizal</h3>
                            </div>
                        </Link>
                        <div className="covid_information_center m1">
                            <img src={process.env.PUBLIC_URL+ "/images/covid.png"} alt="Covid"/>
                            <h3>Covid Information Center</h3>
                        </div>
                        <div className="friends m1">
                            <img src={process.env.PUBLIC_URL+"/images/friends.png"} alt="Friends"/>
                            <h3>Friends</h3>
                        </div>
                        <div className="memories m1">
                            <img src={process.env.PUBLIC_URL+"/images/memories.png"} alt="Memories"/>
                            <h3>Memories</h3>
                        </div>
                        {menuExpansion.expandedState?<ExpandedMenu/>: null}
                        <div className="see_more " onClick={expandMenu}>
                            <div className={menuExpansion.expandedState?
                                "dropdown rotate_180":"dropdown rotate_0"}>
                                <img src={process.env.PUBLIC_URL+"/images/drop.png"} alt="drop"  />
                            </div>
                        
                            <h3>See {menuExpansion.expandedState?" Less":" More"}</h3>
                        </div>
                        <div className="line_breaker"></div>
                        <MyShortcuts/>

                        {menuExpansion.expandedShortcut?<ExpandedShortcut/>: null}

                        <div className="see_more_shortcuts " onClick={expandShortcuts}>
                            <div className={menuExpansion.expandedShortcut?
                                "dropdown rotate_180": "dropdown rotate_0"}>
                                 <img src={process.env.PUBLIC_URL+"/images/drop.png"} alt="drop"  />
                            </div>
                        
                            <h3>See {menuExpansion.expandedShortcut?" Less":" More"}</h3>
                        </div>
                        <Footer/>
                      
                    </div>
             
                </div>
            
            </React.Fragment>
         );
    
}

const mapStateToProps = state => ({
    userInfo : state.userAuth.userInfo
});

 
export default connect (mapStateToProps,null)(Shortcuts);


function ExpandedMenu (){
   
        return(
            <React.Fragment>
                <div className="addcenter m1" >
                <img src={process.env.PUBLIC_URL+"/images/adcenter.png"} alt="Ad Center"/>
                <h3>Ad Center</h3>
            </div>
            
            <div className="adsmanager m1" >
                <img src={process.env.PUBLIC_URL+"/images/adsmanager.png"} alt="Ads Manager"/>
                <h3>Ad Management</h3>
            </div>
            
            <div className="campus m1" >
            <img src={process.env.PUBLIC_URL+"/images/campus.png"} alt="Campus"/>
                <h3>Campus</h3>
            </div>
           
            <div className="crisis_management m1" >
                <img src={process.env.PUBLIC_URL+"/images/crisisresponse.png"} alt="Crisis Management"/>
                <h3>Crisis Management</h3>
            </div>

            <div className="events m1" >
                <img src={process.env.PUBLIC_URL+"/images/events.png"} alt="Events"/>
                <h3>Events</h3>
            </div>

            <div className="facebookpay m1" >
                <img src={process.env.PUBLIC_URL+"/images/facebookpay.png"} alt="Pay"/>
                <h3>Facebook Pay</h3>
            </div>

            <div className="games m1" >
                <img src={process.env.PUBLIC_URL+"/images/gaming.png"} alt="Game"/>
                <h3>Game</h3>
            </div>

            <div className="gamingvide m1" >
                <img src={process.env.PUBLIC_URL+"/images/gamingvideo.png"} alt="gaming video"/>
                <h3>Gaming Video</h3>
            </div>

            <div className="messenger m1" >
                <img src={process.env.PUBLIC_URL+"/images/messenger.png"} alt="Messenger"/>
                <h3>Messenger</h3>
            </div>

            <div className="videos m1" >
                <img src={process.env.PUBLIC_URL+"/images/video.png"} alt="Video"/>
                <h3>Videos</h3>
            </div>


            </React.Fragment>
        )
    
}

function MyShortcuts(){

        return (
            <React.Fragment>
              <div className="shortcutcover">
                <div className="header">
                        <h3>Your Shortcuts</h3>
                        <p>Edit</p>
                </div>

                <div className="inagadnons m1" >
                    <img src={process.env.PUBLIC_URL+"/images/pageflag.png"} alt="page Flag"/>
                    <h3>Inagadnons</h3>
                </div>
                <div className="inagadnons m1" >
                    <img src={process.env.PUBLIC_URL+"/images/pageflag.png"} alt="page Flag"/>
                    <h3>Inagadnons</h3>
                </div>
                <div className="inagadnons m1" >
                    <img src={process.env.PUBLIC_URL+"/images/pageflag.png"} alt="page Flag"/>
                    <h3>Inagadnons</h3>
                </div>
                <div className="inagadnons m1" >
                    <img src={process.env.PUBLIC_URL+"/images/pageflag.png"} alt="page Flag"/>
                    <h3>Inagadnons</h3>
                </div>
                <div className="inagadnons m1" >
                    <img src={process.env.PUBLIC_URL+"/images/pageflag.png"} alt="page Flag"/>
                    <h3>Inagadnons</h3>
                </div>
                <div className="inagadnons m1" >
                    <img src={process.env.PUBLIC_URL+"/images/pageflag.png"} alt="page Flag"/>
                    <h3>Inagadnons</h3>
                </div>
              </div>
            </React.Fragment>
        )
    
}

function ExpandedShortcut(){
        return (
           <div>
                 <h1>Expanded Shortcuts</h1>
                 <h1>Expanded Shortcuts</h1>
                 <h1>Expanded Shortcuts</h1>
           </div>
        );  
}

export function Footer() {
        return (
             <React.Fragment>
                 <p style={{color:"rgb(100, 100, 100)" , fontSize:"13px"}}>
                     <Link to="/" className="footer-link">Privacy </Link> &nbsp;
                     <Link to="/" className="footer-link">Terms </Link> &nbsp;
                     <Link to="/" className="footer-link">Advertising </Link> &nbsp;
                     <Link to="/" className="footer-link">Ad Choices </Link>&nbsp;
                     <Link to="/" className="footer-link">Cookies </Link>&nbsp;
                     <Link to="/" className="footer-link">More </Link>&nbsp;
                    . Facebook &copy; {new Date().getFullYear()} </p>
             </React.Fragment>
        );
    
}


