import React from 'react';
import styled from 'styled-components';
import ButtonPrimary from './Button.primary';
import { ButtonProps } from '../Button';

const ButtonSecondary: React.FC<ButtonProps> = styled(ButtonPrimary).attrs({
	className: 'btn--secondary',
})(
	({ theme }) => `
	color: ${theme.colors.buttonPrimaryBackgroundColor};
	background: none;

	&:hover {
		color: ${theme.colors.buttonPrimaryHoverBackgroundColor};
		background-color: ${theme.colors.buttonSecondaryHoverBackgroundColor};
	}

	&:active {
    	color: ${theme.colors.buttonPrimaryActiveBackgroundColor};
		background-color: ${theme.colors.buttonSecondaryActiveBackgroundColor};
	}
`,
);

export default ButtonSecondary;
