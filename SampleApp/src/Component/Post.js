import React from 'react';
import {Link} from 'react-router-dom';

const Post=()=>{
    return(
        <div className='panel panel-danger'>
            <div className='panel panel-heading'>
                <center>
                <h1>Post</h1>
                </center>
            </div>
            <div className='panel panel-body'>
               <div className='jumbotron'>
                   <h3>About Post</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                       culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
              <h3>Javascript</h3>
              <Link to='/post/Javascript'>Details</Link>
              <h3>NodeJs</h3>
              <Link to='/post/Node'>Details</Link>
              <h3>React</h3>
              <Link to='/post/React'>Details</Link>
              <h3>Angular</h3>
              <Link to='/post/Angular'>Details</Link>
              <h3>Python</h3>
              <Link to='/post/Python'>Details</Link>

            </div>
        </div>
        
    )
};
export default Post;