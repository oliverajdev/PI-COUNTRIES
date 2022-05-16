import {COUNTRY_DETAIL, ORDER, FILTER_COUNTRIES, GET_ALL_COUNTRIES,GET_PAG_COUNTRIES, NEXT_PAGE, PREVIOUS_PAGE, FILTER_DESC, FILTER_ASC, SEARCH,} from "../actions/actions"

const inicialState = {
    countries : [],
    search: [],
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

        case ORDER: return {
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
        case SEARCH: return {
            ...state,
            countries: action.payload,
            currentPag: 0,
            paginateCountries: action.payload.slice(0,9),
        }
        case FILTER_ASC: return {
            ...state,
            countries: state.countries.sort((a,b) =>{
                if(a[action.payload] < b[action.payload]) return -1;
                if(a[action.payload] > b[action.payload]) return 1;
                return 0;
            }),
            currentPag: 0,
            paginateCountries: state.countries.slice(0,9),
        }
        case FILTER_DESC: return {
            ...state,
            countries: state.countries.sort((a,b) =>{
                if(a[action.payload] < b[action.payload]) return 1;
                if(a[action.payload] > b[action.payload]) return -1;
                return 0;
            }),
            currentPag: 0,
            paginateCountries: state.countries.slice(0,9),
        }
        default: return {
            ...state,
        }
    }
}



export default rootReducer;