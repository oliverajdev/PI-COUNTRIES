import {ADD_FAVORITE, REMOVE_FAVORITE, DETAIL_COUNTRY, GET_URL,SET_PAGE, GET_ACTIVITIES, DELETE_ACTIVITY, GET_LIST, CLEAN_DETAIL} from "../actions/actions"

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
    favorite: [],
    activities: [],
    list:[]
    
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
        case ADD_FAVORITE: return{
            ...state,
            favorite: [...state.favorite,action.payload]
        }
        case REMOVE_FAVORITE: return{
            ...state,
            favorite: [...state.favorite.filter(e => e.code !== action.payload)]
        }
        case GET_ACTIVITIES: return{
            ...state,
            activities: action.payload
        }
        case DELETE_ACTIVITY: return{
            ...state,
            activities: state.activities.filter( e=> e.id !== action.payload )
        }
        case GET_LIST: return{
            ...state,
            list: action.payload
        }
        case CLEAN_DETAIL: return{
            ...state,
            country: {}
        }
        default: return {
            ...state,
        }
    }
}



export default rootReducer;