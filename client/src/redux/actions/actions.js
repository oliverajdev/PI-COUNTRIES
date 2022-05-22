import { baseUrl } from "../..";


export const GET_URL = 'GET_URL';
export const SET_PAGE = 'SET_PAGE';
export const DETAIL_COUNTRY = 'DETAIL_COUNTRY';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const GET_LIST = 'GET_LIST'





export const getUrl = (searchq,orderq,filterq,pageq,sizeq) => dispatch => {

    var search,order,filter;

    searchq ? search = `search=${searchq}`: search = '';
    orderq ? order = `&orderq=${orderq}`: order = '';
    filterq ? filter = `&filterq=${filterq}` : filter = '';
    !pageq ? pageq = 0 :  pageq = pageq
    !sizeq ? sizeq = 9 :  sizeq = sizeq

    const addToUrl = `?${search}${order}${filter}&page=${pageq}&size=${sizeq}`
    return fetch(`${baseUrl}/countries${addToUrl}`)
    .then(response => response.json())
    .then((json) => {
        
        
        dispatch({
             type: GET_URL,
             payload: json.rows,
             length: json.count,
             continent: orderq,
             filter: filterq,
             search: searchq,
             page: pageq,
             size: sizeq
        })
    })
}



export const setPage = (current) => {
    return {
        type: SET_PAGE,
        payload:current
    }
}

export const getDetail = (code) => dispatch => {

    return fetch(`${baseUrl}/countries/${code}`)
    .then(response => response.json())
    .then(json =>{
        dispatch({
            type:DETAIL_COUNTRY,
            payload: json
        })
    })

}


export const addFavorite = (code) => dispatch => {
    
    return fetch(`${baseUrl}/countries/${code}`)
    .then(response => response.json())
    .then(json =>{
        dispatch({
            type: ADD_FAVORITE,
            payload: json
        })
    })
}

export const removeFavorite = (code) => {
    console.log('remove',code)
    return {
        type: REMOVE_FAVORITE,
        payload:code
    }
}


export const getActivities = () => dispatch => {

    return fetch(`${baseUrl}/activity`)
    .then(response => response.json())
    .then(json =>{
        console.log(json)
        dispatch({
            type: GET_ACTIVITIES,
            payload: json
        })
    })

}

export const deleteActivity = (id) => dispatch => {

    return fetch(`${baseUrl}/activity/delete/${id}`,{
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      })
    .then(response => response.json())
    .then(json =>{
        dispatch({
            type: DELETE_ACTIVITY,
            payload: id
        })
    })

}


export const getFav = (countries) => dispatch => {
    return fetch(`${baseUrl}/countriescode?countries=${countries}`)
}

export const getList = () => dispatch => {
    
    return fetch(`${baseUrl}/countries?filterq=name,ASC&page=0&size=250`)
    .then(response => response.json())
    .then( json => {
        dispatch({
            type: GET_LIST,
            payload: json.rows
        })
       
    })
}