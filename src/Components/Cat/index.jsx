import React from 'react'
import './index.scss'
const Cat = (props) => {
    const {url} = props
    return(
        <div className='cat-img'>
           <span>
               <img alt='cat' src={url} />
           </span>
        </div>
    )
}

export default Cat;