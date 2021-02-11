import {combineReducers} from 'redux';
import articles from './articleReducers';
import galleries from './galleryReducers';
const rootReducer=combineReducers(
    {
        articles,
        galleries

    }
)
export default rootReducer;