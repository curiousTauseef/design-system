import React from 'react';
import styled from 'styled-components';
import ButtonPrimary from './Button.primary';
import { ButtonProps } from '../Button';

const ButtonDestructive: React.FC<ButtonProps> = styled(ButtonPrimary).attrs({
	className: 'btn--destructive',
})(
	({ theme }) => `
	background-color: ${theme.colors.buttonDestructiveBackgroundColor};
	border-color: ${theme.colors.buttonDestructiveBackgroundColor};

	&:hover {
		background-color: ${theme.colors.buttonDestructiveHoverBackgroundColor};
        border-color: ${theme.colors.buttonDestructiveHoverBackgroundColor};
	}

	&:active {
		background-color: ${theme.colors.buttonDestructiveActiveBackgroundColor};
        border-color: ${theme.colors.buttonDestructiveActiveBackgroundColor};
	}
`,
);

export default ButtonDestructive;
