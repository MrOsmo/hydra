import React from 'react'
import scss from "./Information.module.scss"
import man from "../../../../assets/images/man-photo.png"

import { ReactComponent as Arrow } from "../../../../assets/icons/arrow-right.svg"

import { ReactComponent as WaveOne } from "../../../../assets/icons/Vector7.svg";

import { ReactComponent as WaveTwo } from "../../../../assets/icons/Vector8.svg";

import ButtonBackgrounds from '../../../ui/buttons/ButtonBackgrounds';
import ButtonMobile from '../../../ui/buttons_mobile/ButtonMobile';


const Information = () => {
  const titles = [
		{
			title_one: "INTRODUCTION",
			subheading_one: "TO HYDRA VR",
			arrow: <Arrow />,
			description: (
				<div>
					Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat<br /> nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo<br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare<br /> lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
				</div>
			),
			id: Math.random()
		},
		{
			title_two: "ABOUT",
			subheading_two: "HYDRA VR",
			description_two: (
				<div>
					Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus<br /> urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida<br /> dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.<br /> Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet<br /> sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam<br /> etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet<br /> cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha<br /> retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi<br /> n tempor.
				</div>
			),
			id_two: Math.random()
		},{
			title_three: "WHY BUILD",
			subheading_three: "WITH HYDRA?",
			description_three: (
				<div>
					Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat<br/> nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo<br/> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare<br/> lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
				</div>
			),
			arrow_three: <Arrow/>,
			id_three: Math.random()
		}
	]

  const otherTitles = [
		{
			title_one: "INTRODUCTION",
			subheading_one: "TO HYDRA VR",
      description: (
        <div>
          Eget mi proin sed libero enim sed faucibus turpis. Nisl<br/> rhoncus mattis rhoncus urna neque viverra justo. Vivamus<br/> at augue eget arcu dictum. Ultrices gravida dictum fusce<br/> ut placerat orci. Aenean et tortor at risus viverra adipisci<br/> ng at in. Mattis aliquam faucibus purus in massa. Est<br/> placerat in egestas erat imperdiet sed. Consequat sem<br/> per viverra nam libero justo laoreet sit amet. Aliquam<br/> etiam erat velit scelerisque in dictum non consectetur<br/> a. Laoreet sit amet cursus sit amet. Vel eros donec ac<br/> odio tempor orci dapibus. Sem nulla pharetra diam sit<br/> amet nisl suscipit adipiscing bibendum. Leo a diam<br/> sollicitudin tempor.
        </div>
      ),
			id: Math.random()
		},
	  {
			title_two: "WHY BUILD",
			subheading_two: "WITH HYDRA?",
			id_two: Math.random()
		}
	]
  return (
    <div className={scss.container}>
      <div className={scss.content}>
        <div className={scss.intro_heading}>
          <div className={scss.intro}>
            {titles.map((item) => (
              <div key={item.id} className={scss.intro_content}>
                <div className={scss.intro_main_text}>
                  <h1 className={scss.title}>{item.title_one}</h1>
                  <h1 className={scss.subtitle}>{item.subheading_one}</h1>
                </div>
                <div className={scss.intro_main_arrow}>
                  {item.arrow}
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={scss.other_intro_heading}>
          <div className={scss.other_intro}>
            {otherTitles.map((item) => (
              <div key={item.id} className={scss.other_intro_content}>
                <div className={scss.other_intro_main_text}>
                  <h1 className={scss.other_title}>{item.title_one}</h1>
                  <h1 className={scss.other_subtitle}>{item.subheading_one}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={scss.about_heading}>
          <div className={scss.about}>
            <div className={scss.image_card_two}>
              <img src={man} alt="man" />
            </div>

            <div className={scss.about_main_description}>
              {titles.map((item) => (
                <div key={item.id_two} className={scss.about_content}>
                  <div className={scss.about_main_text}>
                    <h1 className={scss.title_two}>{item.title_two}</h1>
                    <h1 className={scss.subtitle_two}>{item.subheading_two}</h1>
                    <p>{item.description_two}</p>
                  </div>
                </div>
              ))}
              <div className={scss.button_background}>
                <ButtonBackgrounds>LET’S GET IN TOUCH</ButtonBackgrounds>
              </div>
            </div>
          </div>
        </div>

            <div className={scss.other_about_main_description}>
              <div className={scss.other_about}>
                <img src={man} alt="man" />
              </div>
              {otherTitles.map((item) => (
                <div key={item.id_two} className={scss.other_about_content}>
                  <div className={scss.other_about_main_text}>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
              <div className={scss.other_button_background}>
                <ButtonMobile>LET'S GET IN TOUCH</ButtonMobile>
              </div>
            </div>
          

        <div className={scss.build_heading}>
          <div className={scss.build}>
            {titles.map((item) => (
              <div key={item.id_three} className={scss.build_content}>
                <div className={scss.build_main_text}>
                  <h1 className={scss.title}>{item.title_three}</h1>
                  <h1 className={scss.subtitle}>{item.subheading_three}</h1>
                </div>
                <div className={scss.build_main_arrow}>
                  {item.arrow_three}
                  <p>{item.description_three}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={scss.other_build_heading}>
          <div className={scss.other_build}>
            {titles.map((item) => (
              <div key={item.id_three} className={scss.other_build_content}>
                <div className={scss.other_build_main_text}>
                  <h1 className={scss.other_title}>{item.title_three}</h1>
                  <h1 className={scss.other_subtitle}>{item.subheading_three}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
  )
}

export default Information