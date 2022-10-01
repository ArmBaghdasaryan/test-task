import {CAT_CATEGORIES, GET_CATS, CATEGORY_ID, LOADING_SPIN,} from "./Type";

const initialState = {
    categories: [],
    categoryId: '',
    cats: [],
    loading: false,
}

const CatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CAT_CATEGORIES:
            return { ...state, categories:action.payload }
        case GET_CATS:
            if(action.page > 1) {
                return { ...state, cats:[...state.cats, ...action.cats] }
            }else {
                return { ...state, cats:[...action.cats] }
            }
        case LOADING_SPIN:
            return{ ...state, loading: action.payload}
        case CATEGORY_ID:
            return { ...state, categoryId:action.payload }
        default : return state
    }
}

export default CatsReducer;