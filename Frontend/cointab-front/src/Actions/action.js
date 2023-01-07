import axios from 'axios'
import { DELETE_USER_ERROR, DELETE_USER_LOADING, DELETE_USER_SUCCESS, FETCH_USER_ERROR, FETCH_USER_LOADING, FETCH_USER_SUCCESS, GET_USER_DETAIL } from './action.type'


export const FetchUser = () => dispatch =>{
    dispatch({type:FETCH_USER_LOADING})
    axios.get('http://localhost:7000/user/fetchuser')
    .then((res)=> dispatch({type:FETCH_USER_SUCCESS,payload:res.data}))
    .catch((err)=> dispatch({type:FETCH_USER_ERROR}))
}


export const DeleteUser = () => dispatch =>{
    dispatch({type:DELETE_USER_LOADING})
    axios.get('http://localhost:7000/user/delete')
    .then((res)=> dispatch({type:DELETE_USER_SUCCESS, payload:res.data}))
    .catch((err)=> dispatch({type:DELETE_USER_ERROR}))
}


export const GetUser = (page) => dispatch => {
    axios.get(`http://localhost:7000/user/userdetail?page=${page}`)
    .then((res) => dispatch({type:GET_USER_DETAIL, payload:res.data}))
    .catch((err)=> console.log(err))
}
