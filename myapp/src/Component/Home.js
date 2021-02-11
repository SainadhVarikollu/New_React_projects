import React,{Component} from 'react';
import Header from './Header';
import JSON from '../db.json';
import Newlist from './Newdisplay';
class Home extends Component{
   
    constructor(){
        super()
        this.state={
            title:'Home Page App',
            news:JSON,
            filtered:JSON
        }
    }
   filteredNews(keyword){
       const output=(this.state.news.filter((data)=>{
           return data.title.toLowerCase().indexOf(keyword)>-1
       }));
       this.setState({filtered:output})

   }
 


    render(){
        
        return(
           
            <React.Fragment>
                 <Header userText={userinput=>{this.filteredNews(userinput)}}/>
                 <Newlist dataList={this.state.filtered}/>
                <h1>Home Page</h1>
            </React.Fragment>
            
        )
    }
}
export default Home;