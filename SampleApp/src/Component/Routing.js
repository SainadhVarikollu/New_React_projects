import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';
import LifeCycle from './LifeCycle';
import Hooks from './HooksComponent'
const Routing=()=>{
    return(<BrowserRouter>
        <header>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Sample</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
               
                <li className="active"><Link to='/' >Home</Link></li>
                <li><Link to='/post'>Post</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/lifecycle'>LifeCycle</Link></li>
                <li><Link to='/hooks'>Hooks</Link></li>
              </ul>
              
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
        </header>
        
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/post' component={Post}></Route>
        <Route path='/post/:topic' component={PostDetails}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/lifecycle' component={LifeCycle}></Route>
        <Route exact path='/hooks' component={Hooks}></Route>
        </BrowserRouter>)

}
export default Routing;