import React from 'react'
import scss from "./InputMobile.module.scss"

const InputMobileBig = ({children}) => {
  return (
    <input className={`${scss.input} ${scss.input_big}`} type="text" placeholder={children}/>
    )
}

export default InputMobileBig