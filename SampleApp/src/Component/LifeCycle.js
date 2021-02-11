//get initial state
//set initial state
//Before getting create
//render
//After getting created

import React,{Component} from 'react';

class LifeCycle extends Component{
    //1.get initial state
    constructor(props){
        super(props)
        console.log('Inside Component');
    //2.set initial state
        this.state={
            title:'Life Cycle'
        }
    
    }
    //3.before getting created(for changing state)
    componentWillMount(){
        console.log('Before getting created')
    }

    //Before state is updating
    componentWillUpdate(){
        console.log('Before getting updated');
    }

    //After state is updating
    componentDidUpdate(){
        console.log('After state getting updated');
    }
    
 //check state change
 shouldComponentUpdate(nextProp,nextState){
     console.log('should component update stops re rendering of the component');
     if(nextState.title=== this.state.title){
         return false;
     }
     else{
         return true;
     }

 }
    
    //4.render
    render(){
        console.log('inside render method')
        return(
            
            <div>
                 <h1>{this.state.title}</h1> 
                 <div className='btn btn-success'
                 onClick={()=>{this.setState({title:'SomethingElse'}) }}
                 >
                   clickme 
                 </div>
            </div>
        )
    }

    //5.After getting created(For calling API)
    componentDidMount(){
        console.log('After getting created')
    }
}
export default LifeCycle;
