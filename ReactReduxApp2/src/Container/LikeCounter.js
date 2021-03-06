import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {handleLikes} from '../actions'

class LikeCounter extends Component{
    
    addLikes=(userClick)=>{
          
        const newLikes=(userClick)==='ADD' ? [this.props.likes+1
            ,this.props.dislikes] : [this.props.likes,this.props.dislikes+1]

          this.props.dispatch(handleLikes(newLikes,this.props.articleId))  
        
    }
    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How about article</h3>
               <div className="addlikes-container">
               <div className="btn like"
                onClick={()=>this.addLikes('ADD')}
                >
                    <div className="hits">
                      {this.props.likes}
                    </div>
                    <div className="fa fa-thumbs-up">

                    </div>
                    
                </div>
                <div className="btn dislike"
                 onClick={()=>this.addLikes('REMOVE')}
                >
                    <div className="hits">
                    {this.props.dislikes}
                    </div>
                    <div className="fa fa-thumbs-down">

                    </div>
                    
                </div>
               </div>
               


            </div>
        )
    }
}
LikeCounter.protoTypes={
    dispatch:PropTypes.func
}
export default connect()(LikeCounter)