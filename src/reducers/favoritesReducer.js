 

 import {TOGGLE_FAVORITES,ADD_FAVORITE,REMOVE_FAVORITE} from "../actions/favoritesActions"

 const initialState={
    film:[],
    displayFavorites:true
}
 const favoritesReducer=(state=initialState,action)=>{
   switch (action.type) {
    case TOGGLE_FAVORITES:
        return {...state,displayFavorites:!state.displayFavorites}
        break;
    
    case ADD_FAVORITE:
    return {...state,film:[...state.film, action.payload]}

    case REMOVE_FAVORITE:
        return {...state,film:[...state.film.map((item)=>action.payload!==item.id)]}
    default:
        return state;
        break;
   }
 }
 export default favoritesReducer;