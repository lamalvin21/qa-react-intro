import React from 'react'
import ItemCard from './ItemCard'

const ListOfItems = ({array, onDelete}) => {
    const itemArray = array.map((itemObject, index) => 
        <ItemCard key={index} index={index} item={itemObject} onDelete={onDelete}/>
    )

    return (
        <div>{itemArray}</div>
    )
}

export default ListOfItems