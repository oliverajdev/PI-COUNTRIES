

export const GET_URL = 'GET_URL';
export const SET_PAGE = 'SET_PAGE'
export const DETAIL_COUNTRY = 'DETAIL_COUNTRY'

export const getUrl = (searchq,orderq,filterq,pageq,sizeq) => dispatch => {

    var search,order,filter;

    searchq ? search = `search=${searchq}`: search = '';
    orderq ? order = `&orderq=${orderq}`: order = '';
    filterq ? filter = `&filterq=${filterq}` : filter = '';
    !pageq ? pageq = 0 :  pageq = pageq
    !sizeq ? sizeq = 9 :  sizeq = sizeq

    const addToUrl = `?${search}${order}${filter}&page=${pageq}&size=${sizeq}`
    return fetch(`http://localhost:3001/countries${addToUrl}`)
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

    return fetch(`http://localhost:3001/countries/${code}`)
    .then(response => response.json())
    .then(json =>{
        dispatch({
            type:DETAIL_COUNTRY,
            payload: json
        })
    })

}