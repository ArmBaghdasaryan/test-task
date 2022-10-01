import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCatCategories, getCats} from "../../redux/Action";
import Category from "../../Components/Category/index";
import Cat from "../../Components/Cat/index";
import ClipLoader from "react-spinners/ClipLoader";
import './Cats.scss';
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const Cats = ()=> {
    const dispatch = useDispatch();
    const { categories, categoryId, cats,  loading } = useSelector((state) => state.cats)
    const[ page, setPage ] =  useState(1);
    const changePage = useCallback(()=> {
            setPage(1)
    }, [ page ])
    const seeMoreCats = ()=>{
        setPage(next => next + 1)
    }
    useEffect(()=>{
        dispatch(getCatCategories())
    }, [])

    useEffect(()=>{
        dispatch(getCats(categoryId, page))
    }, [categoryId, page]);
    return(
        <div className='cats-page'>
            <h1 className="collection">Collection of cats</h1>
            <div className='categories'>
                { categories?.map(item => <Category key={item.id} {...item} changePage={changePage}/>)}
            </div>
            <ClipLoader  loading={loading} cssOverride={override} size={150} />
            <div className='cats'>
                {
                    cats?.map((item, index) => <Cat key={index} {...item}/>)
                }
            </div>
            <div className='add'>
                <button onClick={seeMoreCats}>Add Cats</button>
            </div>
        </div>
    )
}

export default Cats;