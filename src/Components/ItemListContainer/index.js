import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1>{greeting==="Home"?`Estas en el ${greeting}`:`Apretaste en el menu la opcion de ${greeting}`}</h1>
    </div>
  )
}

export default ItemListContainer