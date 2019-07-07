import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button } from 'components'

const NotFound: React.FC<RouteComponentProps> = ({ history }) => (
  <div className='container'>
  <h1 className='container__title'>Not Found</h1>
  <div className='container__button-wrapper'>
    <Button caption='Go Back' onClick={history.goBack} />
  </div>
  </div>
)

export default NotFound
