import React from 'react';
import './index.scss';
import {useDispatch} from "react-redux";
import {setCategoryId} from "../../redux/Action";

const Category = (props)=> {
    const { name, id, changePage } =  props;
    const dispatch = useDispatch()
    const getCategoryCat = ()=> {
        changePage()
        dispatch(setCategoryId(id))

    }
    return(
        <div className='category-button'>
            <button onClick={getCategoryCat}>{name}</button>
        </div>
    )
}
export default Category