import React from 'react';
import scss from './Header.module.scss';
import logo from "../../../assets/logo.png";
import girl from "../../../assets/images/girl-photo.png"
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrow-small-right.svg"

import { ReactComponent as LocationIcon } from "../../../assets/icons/location.svg"
import { ReactComponent as PhoneIcon } from "../../../assets/icons/phone-call.svg"
import { ReactComponent as MailIcon } from "../../../assets/icons/mail.svg"

import { ReactComponent as WavyLineOneIcon } from "../../../assets/icons/Vector4.svg"

import { ReactComponent as WavyLineTwoIcon } from "../../../assets/icons/Vector2.svg"

import { ReactComponent as WavyLineThreeIcon } from "../../../assets/icons/Vector3.svg"

import { ReactComponent as WavyLineFourIcon } from "../../../assets/icons/Vector1.svg"

import { ReactComponent as ArrowSmallRight } from "../../../assets/icons/chevron-circle-right-one.svg"
import { ReactComponent as ArrowSmallLeft } from "../../../assets/icons/chevron-circle-right.svg"

import { ReactComponent as StraightLineIcon } from "../../../assets/icons/straight-line.svg"

import { ReactComponent as LogoName } from "../../../assets/logo-name.svg"

import { ReactComponent as Menu } from "../../../assets/icons/Hamburger-Button.svg"

import ButtonBackgrounds from '../../ui/buttons/ButtonBackgrounds';
import ButtonNoBackgrounds from '../../ui/buttons/ButtonNoBackgrounds';
import ButtonMobile from '../../ui/buttons_mobile/ButtonMobile';

const Header = () => {
	const link = [
		{
			href: "http://",
			name: "ABOUT",
			id: Math.random()
		},
		{
			href: "http://",
			name: "SERVICES",
			id: Math.random()
		},
		{
			href: "http://",
			name: "TECHNOLOGIES",
			id: Math.random()
		},
		{
			href: "http://",
			name: "HOW TO",
			id: Math.random()
		}
	]

	const contact = [
		{
			title: "Give Us a Visit",
			contact: "Union St, Seattle, WA 98101, United States",
			imagetwo: <LocationIcon />,
			id: Math.random()
		},
		{
			line: <StraightLineIcon />
		},
		{
			title: "Give Us a Call",
			contact: "(110) 1111-1010",
			image: <PhoneIcon />,
			id: Math.random()
		},
		{
			line: <StraightLineIcon />
		},
		{
			title: "Send Us a Message",
			contact: "Contact@HydraVTech.com",
			image: <MailIcon />,
			id: Math.random()
		}
	]
	return (
		<>
			<header className={scss.header}>
				<div className='container'>
					<div className={scss.content}>
						<div className={scss.left}>
							<img src={logo} alt="logo" />
							<LogoName />
						</div>
						<div className={scss.middle}>
							<nav>
								<ul>
									{link.map((item) => (
										<li key={item.id}>
											<a href={item.href}>{item.name}</a>
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className={scss.right}>
							<ButtonNoBackgrounds>CONTACT US</ButtonNoBackgrounds>
							<ButtonBackgrounds>JOIN HYDRA</ButtonBackgrounds>
						</div>
							<div className={scss.right_menu}>
								<Menu />
							</div>
					</div>

					<div className={scss.middle_content}>
					<div className={scss.other_girl}>
							<img src={girl} alt="girl" />
						</div>
						<div className={scss.middle_part}>
							<h1 className={scss.heading}><span>Dive</span> Into The Depths<br /> of <span>Virtual Reality</span></h1>

							<h1 className={scss.other_heading}><span>Dive</span> Into The Depths<br /> of <span>Virtual Reality</span></h1>
								
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et doloreb<br />nisl tincidunt eget. Lectus mauris eros in vitae .</p>
							<div className={scss.button_style}>
								<ButtonBackgrounds>BUILD YOUR WORLD</ButtonBackgrounds>
								<div className={scss.arrow}>
								<ArrowRight className="little-arrow" />
								</div>
							</div>
							<div className={scss.button_mobile}>
								<ButtonMobile>BUILD YOUR WORLD</ButtonMobile>
							</div>
							
						</div>
						<div className={scss.other_middle_part}>
							<img src={girl} alt="girl" />
					</div>
					</div>
					

					<div className={scss.conclusion_content}>
						<div className={scss.conclusion_part}>
							<div className={scss.card_box}>
								<div className={scss.icon_text}>
									{contact.map((item) => (
										<div className={scss.card} key={item.id}>
											<div className={scss.image_card}>
												{item.image}
											</div>
											<div className={scss.image_card_location}>
												{item.imagetwo}
											</div>
											<div className={scss.contact_card}>
												<h3>{item.title}</h3>
												<p>{item.contact}</p>
											</div>
											{item.line}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className={scss.other_conclusion_content}>
						<div className={scss.other_conclusion_part}>
							<div className={scss.other_conclusion_card}>
								<ArrowSmallLeft/>
								<LocationIcon/>
								<p>Union St, Seattle, WA 98101, United States<br/></p>
								<ArrowSmallRight/>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
export default Header;
