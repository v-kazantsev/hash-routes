import React from 'react'
import { IItem } from '../items_data'
import '../index.css'

interface IProps {
  idx: number,
  item: IItem,
}

const Item: React.FC<IProps> = ({idx, item }) => {
  const { name, quantity, price } = item
  return (
  <div className='items-list__item'>
    <span>{`No. ${idx + 1}`}</span>
    <span>{`Name: ${name}`} </span>
    <span>{`Quantity: ${quantity}`}</span>
    <span>{`Price: ${price}`}</span>
  </div>
)}

export default Item
