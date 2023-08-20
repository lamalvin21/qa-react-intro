import React from 'react'

const ItemCard = ({item}) => {
  return (
    <>
        <h1>{item}</h1>
        <button>Delete This Item!</button>
    </>
    )
}

export default ItemCard