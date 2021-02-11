import React from 'react';
const PostDetails=(props)=>{
    console.log(props)
    return(
      <div className='panel panel-info'>
          <div className='panel panel-heading'>
            <center>
                <h1>Post Details Page</h1>
            </center>
          </div>
          <div className='panel panel-body'>
          <div className='jumbotron'>
                     <h3>About {props.match.params.topic} Details</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                       culpa qui officia deserunt mollit anim id est laborum.</p>
                 </div>
            
          </div>

      </div>
    )
};
export default PostDetails;