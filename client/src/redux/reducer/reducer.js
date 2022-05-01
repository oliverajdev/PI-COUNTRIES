import {FILTER_COUNTRIES, GET_ALL_COUNTRIES,GET_PAG_COUNTRIES, NEXT_PAGE, PREVIOUS_PAGE} from "../actions/actions"

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
            countries: action.payload
        }
        case GET_PAG_COUNTRIES: return {
            ...state,
            paginateCountries: action.payload
        }
        case NEXT_PAGE: return {
            ...state,
            currentPag: state.currentPag+9
        }
        case PREVIOUS_PAGE: return {
            ...state,
            currentPag: state.currentPag-9
        }
        case FILTER_COUNTRIES: return {
            ...state,
            paginateCountries: action.payload
        }
        default: return {
            ...state,
        }
    }
}

// case GET_PAG_COUNTRIES:return {
//     ...state,
//     paginateCountries: state.countries.splice(action.payload,action.payload+9)

// }


export default rootReducer;