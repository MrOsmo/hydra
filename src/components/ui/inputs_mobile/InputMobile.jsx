import React from 'react'
import scss from "./InputMobile.module.scss"

const InputMobile = ({children}) => {
  return (
    <input className={`${scss.input} ${scss.input_normal}`} type="text" placeholder={children}/>

  )
}

export default InputMobile