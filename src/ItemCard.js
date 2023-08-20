import React from 'react'

const ItemCard = ({item, onDelete, index}) => {
    function handleClick() {
        onDelete(index)
    }

  return (
    <>
        <h1>{item}</h1>
        <button onClick={handleClick}>Delete This Item!</button>
    </>
    )
}

export default ItemCard