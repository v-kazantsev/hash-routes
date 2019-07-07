import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button } from 'components'
import { IItem, itemsToLoad } from './items_data'
import Item from './components/Item'
import './index.css'

const ItemsPage: React.FC<RouteComponentProps> = ({ history }) => {
  const [items, setItems] = useState<IItem[]>([])
  useEffect(() => (
    setItems(itemsToLoad) 
  ), [])
  return (
    <div className='container'>
      <h1 className='container__title'>Items</h1>
      <ul className='items-list' >
        {items.map((item, index) => (
          <li key={item.id}>
            <Item idx={index} item={item} />
          </li>
        ))}
      </ul>
      <div>{`Total: ${items.length}`}</div>
      <div className='container__button-wrapper'>
        <Button caption='Back' onClick={history.goBack} />
      </div>
    </div>
  )
}

export default ItemsPage
