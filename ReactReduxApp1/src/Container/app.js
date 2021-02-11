import React,{Component} from 'react';
import {connect} from 'react-redux';
import {MovieList} from '../actions';
import {bindActionCreators} from 'redux';
import ListMovies from '../Component/ListMovies';
class App extends Component{
    componentDidMount(){
        this.props.MovieList()
    }
    render(){
        return (
            <React.Fragment>
                <h1>Redux</h1>
                <ListMovies Lists={this.props.mydata}/>
            </React.Fragment>
        )
    }
}
//will receive state
function mapStateToProps(state){
  console.log(state)
  return {
      mydata:state.movies
}
}
//Dispatch/bind action
function mapDispatchToProps(dispatch){

    return bindActionCreators({MovieList},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App)