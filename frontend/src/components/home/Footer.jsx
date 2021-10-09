import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <React.Fragment>
        <div className="f_languages">
            <div className="f_bat">
                <Link to = "/" className="links">English</Link>
                <Link to="/" className="links">Filipino</Link>
                <Link to="/" className="links">Bisaya</Link>
                <Link to="/" className="links">Español</Link>
            </div>
            <div className="s_bat">
                <Link to="/" className="links">한국어</Link>
                <Link to="/" className="links">日本語</Link>
                <Link to="/" className="links">العربية</Link>
            </div>
           <div className="t_bat">
                <Link to="/" className="links">中文(简体)</Link>
                <Link to="/" className="links">Portugues(Brasil)</Link>
                <Link to="/" className="links">Francais(France)</Link>
                <Link to="/" className="links">Deutsch</Link>
           </div>
        </div>
        <div className="f_menu">
            <Link to="/" className="menu_l">Signup</Link>
            <Link to="/" className="menu_l">Login</Link>
            <Link to="/" className="menu_l">Messenger</Link>
            <Link to="/" className="menu_l">Facebook Lite</Link>
            <Link to="/" className="menu_l">Watch</Link>
            <Link to="/" className="menu_l">People</Link>
            <Link to="/" className="menu_l">Pages</Link>
            <Link to="/" className="menu_l">Page Category</Link>
            <Link to="/" className="menu_l">Games</Link>
            <Link to="/" className="menu_l">Locations</Link>
            <Link to="/" className="menu_l">Marketplace</Link>
            <Link to="/" className="menu_l">Facebook Pay</Link>
            <Link to="/" className="menu_l">Groups</Link>
            <Link to="/" className="menu_l">Jobs</Link>
            <Link to="/" className="menu_l">Oculus</Link>
            <Link to="/" className="menu_l">Portal</Link>
            <Link to="/" className="menu_l">Instagram</Link>
            <Link to="/" className="menu_l">Local</Link>
            <Link to="/" className="menu_l">Fundraisers</Link>
            <Link to="/" className="menu_l">Services</Link>
            <Link to="/" className="menu_l">Voting Information Center</Link>
            <Link to="/" className="menu_l">About</Link>
            <Link to="/" className="menu_l">Create Ad</Link>
            <Link to="/" className="menu_l">Create Page</Link>
            <Link to="/" className="menu_l">Developers</Link>
            <Link to="/" className="menu_l">Careers</Link>
            <Link to="/" className="menu_l">Privacy</Link>
            <Link to="/" className="menu_l">Cookies</Link>
            <Link to="/" className="menu_l">Ad Choices</Link>
            <Link to="/" className="menu_l">Terms</Link>
            <Link to="/" className="menu_l">Help</Link>
        </div>

        <div className="copyright">
            <p>Facebook &copy; {new Date().getFullYear()}</p>
        </div>
        
    </React.Fragment>
    );

}

export default Footer;