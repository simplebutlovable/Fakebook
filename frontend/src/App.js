import React, { Component } from 'react';
import Home from '../src/components/home/home';
import "./App.css";


class App extends Component {
    
    render () { 
        return (
            <div className = "app">
               
                   <Home/>
               
            </div>
        );
    }
}

export default App