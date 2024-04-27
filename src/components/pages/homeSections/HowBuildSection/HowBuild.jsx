import React from 'react'
import scss from "./HowBuild.module.scss"
import { ReactComponent as ArrowRight } from "../..7../../../../../assets/icons/arrow-right.svg"
import { data } from "../../../pages/homeSections/HowBuildSection/HowBuild.js"
import Wave from "../../../../assets/wavy-line.png"
import {dataSecond} from "../../../pages/homeSections/HowBuildSection/HowBuild.js"
import { ReactComponent as ArrowLeft } from "../../../../assets/icons/arrow-left.svg"
import { ReactComponent as ArrowRightOther } from "../../../../assets/icons/other-arrow-right.svg"

const HowBuild = () => {
  const title = [
    {
      title: "HOW WE BUILD",
      sub_title: "WITH HYDRA VR?",
      arrow: <ArrowRight />,
      description: (
        <div>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat<br /> nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo<br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare<br /> lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
        </div>
      )
    }
  ]
  return (
    <section className={scss.how_build}>
      <div className={scss.how_build_content}>
        <div className={scss.how_build_con}>
          {title.map((item) => (
            <div className={scss.how_build_text}>
              <div className={scss.how_build_structure}>
                <div className={scss.how_build_headings}>
                  <h1 className={scss.heading}>{item.title}</h1>
                  <h1 className={scss.subheading}>{item.sub_title}</h1>
                </div>
                <div className={scss.arrow_right}>
                  {item.arrow}
                </div>
                <div className={scss.text}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={scss.other_how_build_content}>
        <div className={scss.other_how_build_con}>
          {title.map((item) => (
            <div className={scss.other_how_build_text}>
              <div className={scss.other_how_build_structure}>
                <div className={scss.other_how_build_headings}>
                  <h1 className={scss.other_heading}>{item.title}</h1>
                  <h1 className={scss.other_subheading}>{item.sub_title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={scss.card_content}>
        <div className={scss.cards}>
          {data.map((item) => (
            <div className={scss.card}>
              <div className={scss.card_text}>
              <p>{item.number}</p>
              </div>
              <div className={scss.arrow_and_text_structure}>
              <div className={scss.arrow_and_text}>
                {item.icon}
                <p>{item.text}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className={scss.wave_img_structure}>
        <div className={scss.wave_img}>
          <img src={Wave} alt="wavy-line" />
        </div>

        </div>
      </div>

      <div className={scss.other_card_content}>
        <div className={scss.other_cards}>
          {dataSecond.map((item) => (
            <div className={scss.other_card}>
              <div className={scss.other_card_text}>
              <p>{item.number}</p>
              </div>
              <div className={scss.other_arrow_and_text_structure}>
              <div className={scss.other_arrow_and_text}>
                <div className={scss.left_arrow}>
                  <ArrowLeft/>
                </div>
                <p>{item.text}</p>
                <div className={scss.arrow_right}>
                  <ArrowRightOther/>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowBuild