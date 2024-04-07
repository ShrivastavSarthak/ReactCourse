import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const PRODUCT =[
    {id:'p1',title:"Product1"},
    {id:'p2',title:"Product2"},
    {id:'p3',title:"Product3"},
  ]
  return (
    <Fragment>
    <h1>Products</h1>
    <ul>
      {
        PRODUCT.map((items)=>(
          <li key={items.id}><Link to={items.id}>{items.title}</Link></li>
        ))
      }
    </ul>
    
    </Fragment>
  )
}

export default Product