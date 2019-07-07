import React from 'react'
import './index.css'

interface IProps {
  caption: string,
  onClick: () => void,
}

const Button:React.FC<IProps> = ({ caption, onClick }) => (
  <button className='button' onClick={onClick}>
    {caption}
  </button>
)

export default Button
