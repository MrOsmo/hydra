import React from 'react';
import scss from './Footer.module.scss';
import Logo from "../../../assets/logo.png"
import Line from "../../../assets/smooth-line-top.png";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Linkedin } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as YouTube } from "../../../assets/icons/youtube.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/instagram.svg";
import { ReactComponent as Pinterest } from "../../../assets/icons/pinterest.svg";
import { ReactComponent as LongLine } from "../../../assets/icons/Vector17.svg";
import { ReactComponent as WaveOne } from "../../../assets/icons/Vector19.svg";
import { ReactComponent as WaveTwo } from "../../../assets/icons/Vector18.svg";
import ButtonBackgrounds from '../../ui/buttons/ButtonBackgrounds';
import ButtonMobile from "../../ui/buttons_mobile/ButtonMobile.jsx"
import {ReactComponent as LineShort} from "../../../assets/icons/Vector25.svg"

const Footer = () => {
	const data = [
		{
			heading: "SOCIALIZING WITH HYDRA",
			title: "ABOUT",
			subtitle: "F.A.Q",
			icon: <Facebook />
		},

		{
			title: "SERVICES",
			subtitle: "SITEMAP",
			icon: <Twitter />
		},
		{
			title: "TECHNOLOGIES",
			subtitle: "CONDITIONS",
			icon: <Linkedin />
		},
		{
			title: "HOW TO JOIN",
			subtitle: "LICENSES",
			icon: <YouTube />
		},
		{
			title: "JOIN HYDRA",
			icon: <Instagram />
		},
		{
			icon: <Pinterest />
		}
	]

	return (
		<footer className={scss.footer}>
			<div className={scss.contacts}>
				<div className={scss.contact_structure}>
				<img className={scss.logo_icon} src={Logo} alt="Logo" />
				<img src={Line} alt="Line" />
				<div className={scss.headlines}>
					{data.map((item) => (
						<div className={scss.li}>
							<ul>
								<li>
									<a href="#">
										{item.title}
									</a>
								</li>
							</ul>
						</div>
					))}
				</div>
				<img src={Line} alt="Line" />
				<div className={scss.licenses}>
					{data.map((item) => (
						<div className={scss.license}>
							<ul>
								<li>
									<a href="#">
										{item.subtitle}
									</a>
								</li>
							</ul>
						</div>
					))}
				</div>
				<img src={Line} alt="Line" />

				<div className={scss.social_media}>
					<h1>SOCIALIZE WITH HYDRA</h1>
					<div className={scss.social_icons}>
						{data.map((item) => (
							<div className={scss.social_structure}>
								<ul>
									<li>{item.icon}</li>
								</ul>
							</div>
						))}
					</div>
					<ButtonMobile children="BUILD YOUR WORLD"/>
				</div>
				</div>
				<div className={scss.wave_one}>
				<WaveOne/>
				</div>
				<div className={scss.wave_two}>
				<WaveTwo/>
				</div>

				<div className={scss.last_info}>
				<div className={scss.long_line}>
					<LongLine/>
				</div>

				<div className={scss.rights}>
					<p>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</p>
				</div>
				</div>
			</div>

			<div className={scss.other_contacts}>
				<div className={scss.other_contact_structure}>
				<img className={scss.other_logo_icon} src={Logo} alt="Logo" />
			
				<div className={scss.other_headlines}>
					{data.map((item) => (
						<div className={scss.other_li}>
							<ul>
								<li>
									<a href="#">
										{item.title}
									</a>
								</li>
							</ul>
						</div>
					))}
				</div>
			
				<div className={scss.other_licenses}>
					{data.map((item) => (
						<div className={scss.other_license}>
							<ul>
								<li>
									<a href="#">
										{item.subtitle}
									</a>
								</li>
							</ul>
						</div>
					))}
				</div>
		

				<div className={scss.other_social_media}>
					<h1>SOCIALIZE WITH HYDRA</h1>
					<div className={scss.other_social_icons}>
						{data.map((item) => (
							<div className={scss.other_social_structure}>
								<ul>
									<li>{item.icon}</li>
								</ul>
							</div>
						))}
					</div>
					<ButtonMobile children="BUILD YOUR WORLD"/>
				</div>
				</div>

				<div className={scss.other_last_info}>
				<div className={scss.other_long_line}>
					<LineShort/>
				</div>

				<div className={scss.other_rights}>
					<p>2023 © HYDRA LANDING PAGE<br/>  BY ZINE. E. FALOUTI<br/>  ALL RIGHTS RESERVED</p>
				</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
