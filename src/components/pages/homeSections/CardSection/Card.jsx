import React from 'react'
import scss from "./Card.module.scss"
import { data } from "../../../pages/homeSections/CardSection/Card.js"
import { dataSecond } from "../../../pages/homeSections/CardSection/Card.js"
import ButtonBackgrounds from '../../../ui/buttons/ButtonBackgrounds.jsx'
import {ReactComponent as Line} from "../../../../assets/icons/Vector10.svg"
import { ReactComponent as ArrowLeft } from "../../../../assets/icons/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../../../assets/icons/other-arrow-right.svg"
import ButtonMobile from '../../../ui/buttons_mobile/ButtonMobile.jsx'

const Card = () => {
  return (
    <section className={scss.whybuild}>
      <div className={scss.cards}>
        {data.map((item, index) => (
          <div key={index} className={scss.card}>
            <img src={item.img} alt={item.title} />
            <h1>{item.title}</h1>
            <Line/>
            <p>{item.p}</p>
            <ButtonBackgrounds>TRY IT NOW</ButtonBackgrounds>
          </div>
        ))}
      </div>

      <div className={scss.other_cards}>
        {dataSecond.map((item, index) => (
          <div key={index} className={scss.other_card}>
            <div className={scss.arrows}>
  
              <div className={scss.arrow_left}>
            <ArrowLeft/>
              </div>
            <img src={item.img} alt={item.title} />
            <div className={scss.arrow_right}>
            <ArrowRight/>
              </div>

            </div>
            <h1>{item.title}</h1>
            <Line/>
            <p>{item.p}</p>
            <ButtonMobile>TRY IT NOW</ButtonMobile>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Card