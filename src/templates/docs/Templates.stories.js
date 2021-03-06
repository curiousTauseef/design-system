import React from 'react';
import styled from 'styled-components';

import Template from '..';

export default {
	title: 'Templates/Templates',
};

const Box = styled.div`
	display: flex;
	flex-basis: 100%;
	align-items: center;
	justify-content: center;
	margin: 1rem;
	padding: 0.5rem;
	min-height: 0;
	font-weight: bold;
	font-size: 2rem;
	color: coral;
	background: cornsilk;
	border: 1px dashed coral;
	border-radius: 1rem;
`;

const args = {
	header: <Box>Header</Box>,
	nav: <Box>Nav</Box>,
	title: <Box>Title</Box>,
	main: <Box>Main</Box>,
	footer: <Box>Footer</Box>,
};

export const Card = props => <Template.Card {...props} />;
Card.args = args;
export const List = props => <Template.List {...props} />;
List.args = args;
export const Full = props => <Template.Full {...props} />;
Full.args = args;
