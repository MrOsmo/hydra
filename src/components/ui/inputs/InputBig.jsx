import React from 'react'
import scss from "./Input.module.scss"

const InputBig = ({children}) => {
  return (
    <input className={`${scss.input} ${scss.input_big} ${scss.input_long}`} type="text" placeholder={children}/>

  )
}

export default InputBig