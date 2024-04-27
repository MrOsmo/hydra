import React from 'react'
import scss from "./Technologies.module.scss"
import girl from "../../../../assets/images/last-photo.png"
import logo1 from "../../../../assets/images/hydra-tech-1.png"
import logo2 from "../../../../assets/images/hydra-tech-2.png"
import logo3 from "../../../../assets/images/hydra-tech-3.png"
import logo4 from "../../../../assets/images/hydra-tech-4.png"
import { ReactComponent as ArrowLeft } from "../../../../assets/icons/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../../../assets/icons/other-arrow-right.svg"

import { ReactComponent as ArrowDown } from "../../../../assets/icons/chevron-small-down.svg"


const Technologies = () => {
  return (
    <section className={scss.technologies}>
      <div className={scss.card}>
        <div className={scss.img_card}>
          <img src={girl} alt="girl" />
        </div>
          <div className={scss.img_text}>
            <h1 className={scss.heading}>TECHNOLOGIES & HARDWARE</h1>
            <h1 className={scss.subheading}>USED BY HYDRA VR.</h1>
            <div className={scss.arrow_icon}>
              <ArrowDown />
          </div>
        </div>
      </div>
      
      <div className={scss.other_card}>
        <div className={scss.other_img_card}>
          <img src={girl} alt="girl" />
        </div>
          <div className={scss.other_img_text}>
            <h1 className={scss.other_heading}>TECHNOLOGIES & HARDWARE</h1>
            <h1 className={scss.other_subheading}>USED BY HYDRA VR.</h1>
        </div>
      </div>
      
      <div className={scss.logos}>
        <div className={scss.logo_content}>
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
        <img src={logo4} alt="logo4" />
        </div>
      </div>

      <div className={scss.other_logos}>
        <div className={scss.other_logo_content}>
          <div className={scss.arrow_left}>
            <ArrowLeft/>
          </div>
        <img src={logo4} alt="logo4" />
        <div className={scss.arrow_right}>
          <ArrowRight/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies