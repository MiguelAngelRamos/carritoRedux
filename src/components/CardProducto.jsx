import React from 'react'

const CardProducto = ({ producto }) => {

  const { title, image, precio } = producto;
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={image} className="card-img-top" alt="" />
      <div className ="card-body">
      <h5 className ="card-title">{ title }</h5>
      <span className="font-weight-bold text-center">${ Intl.NumberFormat().format(precio) }</span>
      </div>
      <buttton className ="btn btn-success btn-block">Agregar al carrito</buttton>
    </div>
    
  )
}

export default CardProducto
