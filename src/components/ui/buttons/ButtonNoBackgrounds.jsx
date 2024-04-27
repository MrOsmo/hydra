import React from 'react'
import scss from "./Button.module.scss"

const ButtonNoBackgrounds = ({ children }) => {
  return (
    <button className={`${scss.button} ${scss.no_bg}`}>{children}</button>
  )
}

export default ButtonNoBackgrounds