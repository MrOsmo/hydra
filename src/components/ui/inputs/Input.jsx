import React from 'react'
import scss from "./Input.module.scss"

const Input = ({children}) => {
  return (
    <input className={`${scss.input} ${scss.input_normal}`} type="text" placeholder={children}/>
  )
}

export default Input