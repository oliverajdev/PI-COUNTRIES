import {DETAIL_COUNTRY, GET_URL,SET_PAGE} from "../actions/actions"

const inicialState = {
    countries : [],
    country : {},
    continent: null,
    length: 0,
    order: null,
    page: 0,
    size:9,
    search: null,
    current: 0,
    
}


const rootReducer = (state = inicialState, action) => {
    console.log(action)
    switch(action.type) {
        case GET_URL: return {
            ...state,
            countries: action.payload,
            length: Math.ceil(action.length/10),
            continent : action.continent,
            order : action.order,
            page: action.page,
            size: action.size,
            search: action.search,
        }
        case SET_PAGE: return {
            ...state,
            current: state.current+action.payload
        }
        case DETAIL_COUNTRY: return {
            ...state,
            country: action.payload
        }
        default: return {
            ...state,
        }
    }
}



export default rootReducer;