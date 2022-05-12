import {COUNTRY_DETAIL, FILTER_ORDER, FILTER_COUNTRIES, GET_ALL_COUNTRIES,GET_PAG_COUNTRIES, NEXT_PAGE, PREVIOUS_PAGE} from "../actions/actions"

const inicialState = {
    countries : [],
    country: {},
    paginateCountries: [],
    currentPag: 0,
}


const rootReducer = (state = inicialState, action) => {
    switch(action.type) {
        case GET_ALL_COUNTRIES: return {
            ...state,
            paginateCountries: action.payload.slice(0,9),
            currentPag: 0,
            countries: action.payload,
        }
        case GET_PAG_COUNTRIES: return {
            ...state,
            paginateCountries: state.countries.slice(action.payload,action.payload+action.inc)
        }
        case NEXT_PAGE: return {
            ...state,
            currentPag: state.currentPag+10
        }
        case PREVIOUS_PAGE: return {
            ...state,
            currentPag: state.currentPag-10
        }
        case FILTER_COUNTRIES: return {
            ...state,
            countries: action.payload,
            currentPag: 0,
            paginateCountries: action.payload.slice(0,9),
            
        }
        case FILTER_ORDER: return {
            ...state,
            countries: action.payload,
            currentPag: 0,
            paginateCountries: action.payload.slice(0,9),
            
        }
        case COUNTRY_DETAIL: return {
            ...state,
            country: action.payload
        }
        case COUNTRY_DETAIL: return {
            ...state,
            country: action.payload
        }
        default: return {
            ...state,
        }
    }
}



export default rootReducer;