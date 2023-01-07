import { DELETE_USER_ERROR, DELETE_USER_LOADING, DELETE_USER_SUCCESS, FETCH_USER_ERROR, FETCH_USER_LOADING, FETCH_USER_SUCCESS, GET_USER_DETAIL } from "../Actions/action.type";

const initialState = {
 Loading:false,
 delete_Loader: false,
 data: []
}

export const appReducer = (state=initialState,{type,payload})=>{
    switch(type){

        case FETCH_USER_LOADING:{
            return {
                ...state,
                Loading: true,
            }
        }

        case FETCH_USER_SUCCESS:{
            alert(`${payload}`)
            return {
                ...state,
                Loading: false,
              
            }
        }

        case FETCH_USER_ERROR:{
            return {
                ...state,
                Loading: false,

            }
        }

        case DELETE_USER_LOADING: {
            return {
                ...state,
                delete_Loader:true
            }
        }

        case DELETE_USER_SUCCESS: {
            alert(`${payload.deletedCount} enteries are deleted`)
            return {
                ...state,
                delete_Loader: false,
            }
        }

        case DELETE_USER_ERROR: {
            return {
                ...state,
                delete_Loader: false
            }
        }

        case GET_USER_DETAIL: {
            console.log(payload)
            return {
                ...state,
                data: payload
            }
        }
        default:return state;
    }
}