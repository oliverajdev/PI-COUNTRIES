export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_PAG_COUNTRIES = 'GET_PAG_COUNTRIES'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES'


export const getAllCountries = () => dispatch => {
    return fetch(`http://localhost:3001/countries`)
    .then(response => response.json())
    .then(json => {
        dispatch({
            type: GET_ALL_COUNTRIES, 
            payload:json,
        })
    })
};



export const getPagCountries = (pag) => dispatch => {
    return fetch(`http://localhost:3001/countries`)
    .then(response => response.json())
    .then(json => {
        dispatch({
            type: GET_PAG_COUNTRIES, 
            payload:json.slice(pag,pag+9),
        })
    })
};



export const NextPage = () => {
    return{
        type: NEXT_PAGE
    }
}


export const PrevPage = () => {
    return{
        type: PREVIOUS_PAGE
    }
}


export const FilterCountries = (name) => dispatch => {
    return fetch(`http://localhost:3001/countries?name=${name}`)
    .then(response => response.json())
    .then(json =>{ 
        dispatch({
            type: FILTER_COUNTRIES,
            payload: json.slice(0,9),
        })
    })
}