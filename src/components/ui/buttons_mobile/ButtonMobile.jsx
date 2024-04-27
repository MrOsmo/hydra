import React from 'react'
import scss from "./ButtonMobile.module.scss"

const ButtonMobile = ({ children }) => {
  return (
    <button className={scss.button_mobile}>{children}</button>

  )
}

export default ButtonMobile