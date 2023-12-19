import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';


 export const reducers=combineReducers({
    movies:movieReducer,
    favorites:favoritesReducer
 })
 export const store=createStore(reducers);
//export default reducers;