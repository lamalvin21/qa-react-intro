import React from 'react'
import ItemCard from './ItemCard'

const ListOfItems = ({array}) => {
    const itemArray = array.map((itemObject) => 
        <ItemCard key={itemObject.id} item={itemObject} />
    )
    return (
        <div>{itemArray}</div>
    )
}

export default ListOfItems