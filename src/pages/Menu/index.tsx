import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button } from 'components'
import './index.css'

const Menu: React.FC<RouteComponentProps> = ({ history }) => (
  <div className='menu'>
    <Button caption='Items' onClick={() => history.push('/items')} />
    <Button caption='About' onClick={() => history.push('/about')} />
  </div>
)

export default Menu
