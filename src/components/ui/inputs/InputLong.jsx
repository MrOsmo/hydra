import React from 'react'
import scss from "./Input.module.scss"

const InputLong = ({children}) => {
  return (
    <input className={`${scss.input} ${scss.input_long}`} type="text" placeholder={children}/>
  )
}

export default InputLong