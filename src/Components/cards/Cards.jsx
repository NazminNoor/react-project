import React from 'react'
import Card from './Card'

import item from '../Item/index,js'

function Cards() {
  return (
    <div className='grid grid-cols-3 gap-6 my-16'>
        {
            item.map((data, index)=>(<Card  ProductName={data. ProductName}  BrandName={data. BrandName} Price ={data.Price } photo={data. photo}/>))
           
            
        }
        
    </div>
  )
}

export default Cards