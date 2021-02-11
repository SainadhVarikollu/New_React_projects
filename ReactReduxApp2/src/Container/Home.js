import React,{Component} from 'react';
//connnect to state and dispatch action
import {connect} from 'react-redux';
import {latestNews,articleNews} from '../actions';
import {galleryNews} from '../actions';
import Latest from '../Component/Home/LatestNews'
import Article from '../Component/Home/ArticleNews';
import Gallery from '../Component/Home/GalleryNews';
import {bindActionCreators} from 'redux';

class Home extends Component{
   
    componentDidMount(){
        if(Object.entries(this.props.myarticle).length===0){
            this.props.latestNews()
            this.props.articleNews()
            this.props.galleryNews()
        }

    }
    render(){
        return(
            <React.Fragment>
            <div>Home</div>
            <Latest latestArray={this.props.myarticle.latestdata}/>
            <Article articleArray={this.props.myarticle.articledata}/>
            <Gallery galleryArray={this.props.mygalleries}/>
            </React.Fragment>


        )
    }

}
//receive state from store
function mapStateToProps(state){
    console.log(state);
    return{
        myarticle:state.articles,
        mygalleries:state.galleries
    }
}
//Help to dispatch the action
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews,galleryNews},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)