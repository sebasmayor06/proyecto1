import {ADD_FAVORITE, GET_FAVORITES, REMOVE_FAVORITE} from "./actions";

const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_FAVORITES:
            return{ 
                ...state, 
                myFavorites : action.payload
            };
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
            };
        case REMOVE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char)=>char.id !== action.payload
                ),
            };
            default:
            return {...state};
          

    }
};
export default rootReducer;