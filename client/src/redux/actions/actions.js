export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_PAG_COUNTRIES = 'GET_PAG_COUNTRIES'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES'
export const ORDER = 'ORDER'
export const COUNTRY_DETAIL = 'COUNTRY_DETAIL'
export const FILTER_BY_ACTIVITIES = 'FILTER_BY_ACTIVITIES'
export const FILTER_ASC = 'FILTER_ASC'
export const FILTER_DESC = 'FILTER_DESC'
export const  SEARCH= 'SEARCH'


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



export const getPagCountries = (pag,inc) => {
    return{
            type: GET_PAG_COUNTRIES, 
            payload: pag,
            inc: inc

    }
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


export const Search = (name) => dispatch => {
    return fetch(`http://localhost:3001/countries?name=${name}`)
    .then(response => response.json())
    .then(json =>{ 
        dispatch({
            type: SEARCH,
            payload: json
        })
    })
}


export const Order = (value,cont) => dispatch => {
    var result ;
    if(value !== null) result = `?value=${value}`;
    else result = `?continent=${cont}`;
    return fetch(`http://localhost:3001/countries/order/${result}`)
    .then(response => response.json())
    .then(json =>{
        dispatch({
            type: ORDER,
            payload: json
        })
    })
}

export const FilterAsc = (payload) => {
    return {
        type: FILTER_ASC,
        payload:payload
    }
}

export const FilterDesc = (payload) => {
    return {
        type: FILTER_DESC,
        payload:payload
    }
}





export const CountryDetail = (code) => dispatch => {
    return fetch(`http://localhost:3001/countries/${code}`)
    .then(response => response.json())
    .then(json =>{
        dispatch({
            type: COUNTRY_DETAIL,
            payload: json
        })
    })
}