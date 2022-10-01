import {CAT_CATEGORIES, GET_CATS, CATEGORY_ID, LOADING_SPIN,} from "./Type";
import {sendRequest} from "../api/api";

const getCatCategoriesAC = (payload) => ({ type: CAT_CATEGORIES, payload});
const getLoadingSpin = (payload) => ({type: LOADING_SPIN, payload})
const getCatsAC = (page, cats ) => ({ type:GET_CATS, page, cats})
export const setCategoryId = ( payload ) => ({ type:CATEGORY_ID, payload })

export const getCatCategories = () => {
    return async(dispatch) => {
        dispatch(getLoadingSpin(true))
        const response = await sendRequest('https://api.thecatapi.com/v1/categories', 'GET')
        dispatch(getCatCategoriesAC(response))
        dispatch(getLoadingSpin(false))
    }
}

export const getCats = (id, page) => {
    return async ( dispatch, ) => {
        dispatch(getLoadingSpin(true))
        const response = await sendRequest(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`)
        dispatch(getCatsAC(page, response))
        dispatch(getLoadingSpin(false))

    }
}

