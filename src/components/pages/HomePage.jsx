import React from 'react';
import Information from './homeSections/InformationSection/Information';
import Card from './homeSections/CardSection/Card.jsx';
import Technologies from './homeSections/TechnologiesSection/Technologies.jsx';
import HowBuild from './homeSections/HowBuildSection/HowBuild.jsx';
import Form from './homeSections/FormSection/Form.jsx';

const HomePage = () => {
	return (
		<div>
			<Information/>
			<Card/>
			<Technologies/>
			<HowBuild/>
			<Form/>
		</div>
	);
};
export default HomePage;
