import React from 'react'
import scss from "./Form.module.scss"
import Input from '../../../ui/inputs/Input.jsx'
import { ReactComponent as StraightLine } from "../../../../assets/icons/Vector16.svg"
import { ReactComponent as StraightLineMini } from "../../../../assets/icons/Vector24.svg"
import InputLong from '../../../ui/inputs/InputLong.jsx'
import InputBig from '../../../ui/inputs/InputBig.jsx'
import ButtonBackgrounds from '../../../ui/buttons/ButtonBackgrounds.jsx'
import InputMobileBig from '../../../ui/inputs_mobile/InputMobileBig.jsx'
import InputMobile from '../../../ui/inputs_mobile/InputMobile.jsx'
import ButtonMobile from '../../../ui/buttons_mobile/ButtonMobile.jsx'

const Form = () => {
  return (
    <section className={scss.form}>
      <div className={scss.form_content}>
        <div className={scss.form_background}>
          <div className={scss.form_heading}>
            <h1 className={scss.heading}>JOIN HYDRA</h1>
            <StraightLine />
            <h1 className={scss.sub_heading}>Let’s Build Your VR Experience</h1>
          </div>
          <div className={scss.input_structure}>
            <div className={scss.input_top}>
            <Input children="First Name" />
            <Input children="Last Name" />
            </div>
            <div className={scss.inputs_bottom}>
            <Input children="Email" />
            <Input children="Phone Number" />
            </div>
            <InputLong children="Subject"/>
            <div className={scss.input_big}>
            <InputBig children="Tell Us Something..." />
            </div>
            <ButtonBackgrounds>SEND TO HYDRA</ButtonBackgrounds>
          </div>
        </div>
      </div>
      <div className={scss.other_form_content}>
        <div className={scss.other_form_background}>
          <div className={scss.other_form_heading}>
            <h1 className={scss.other_heading}>JOIN HYDRA</h1>
            <StraightLineMini />
            <h1 className={scss.other_sub_heading}>Let’s Build<br/> Your VR Experience</h1>
          </div>
          <div className={scss.other_input_structure}>
            <div className={scss.other_input_top}>
            <InputMobile children="First Name"/>
            <InputMobile children="Last Name" />
            </div>
            <div className={scss.other_inputs_bottom}>
            <InputMobile children="Email" />
            <InputMobile children="Phone Number" />
            </div>
            <InputMobile children="Subject"/>
            <div className={scss.other_input_big}>
            <InputMobileBig children="Tell us something..."/>
            </div>
            <ButtonMobile>SEND TO HYDRA</ButtonMobile>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form