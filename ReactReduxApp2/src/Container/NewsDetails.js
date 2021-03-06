import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectedNews, clearselectedNews} from '../actions'
import LikeCounter from './LikeCounter';


class NewsDetails extends Component {

    componentDidMount(){
        this.props.dispatch(selectedNews(this.props.match.params.id))
    }

    renderNews = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {data.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {data.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {data.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Article By:{data.author}

                            </span>
                              
                            <img src={`/images/articles/${data.img}`}/>
                            <div className="body_news">
                                {data.body}
                            </div>
                           <div>
                               <LikeCounter 
                               articleId={data.id}
                               likes={data.likes[0]}
                               dislikes={data.likes[0]}
                               />
                               
                          </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="news_container">
                {this.renderNews(this.props.details)}
            </div>
        )
    }

    componentWillUnmount(){
        this.props.dispatch(clearselectedNews())
    }

}

function mapStateToProps(state){
    return{
        details:state.articles
    }
}

NewsDetails.protoTypes={
    dispatch:PropTypes.func 
}


export default connect(mapStateToProps)(NewsDetails)