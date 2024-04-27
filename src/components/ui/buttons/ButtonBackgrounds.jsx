import React from 'react'
import scss from "./Button.module.scss"

const ButtonBackgrounds = ({ children }) => {
  return (
    <button className={`${scss.button} ${scss.bg}`}>{children}</button>
  )
}

export default ButtonBackgrounds