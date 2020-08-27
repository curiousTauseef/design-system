import styled from 'styled-components';
import { hideVisually, transparentize } from 'polished';
import Button from '../Button';
import tokens from '../../tokens';

const borderLeft = () => `
	position: relative;

	&:before {
		position: absolute;
		content: '';
		width: .1rem;
		height: 1.5rem;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		background: ${tokens.colors.gray0};
	}
`;

export const HeaderBar = styled.div.attrs({
	className: 'header-bar',
})`
	display: flex;
	width: 100%;
	min-height: 4.8rem;
	color: ${tokens.colors.gray0};
	background: linear-gradient(133deg, ${tokens.colors.deepBlue}, ${tokens.colors.russianViolet});
`;
export const Item = styled.span.attrs({
	className: 'header-bar__item',
})`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	min-height: 4.8rem;

	> .link,
	> .btn:not(.btn--small),
	> .text {
		padding: 0 1.5rem;
		transition: all 0.2s ease-out;

		&,
		&:hover,
		&:focus,
		&:active {
			color: ${tokens.colors.gray0};
		}
	}

	&:hover {
		background: ${transparentize(0.8, tokens.colors.gray0)};
	}

	&:active {
		background: ${transparentize(0.9, tokens.colors.gray0)};
	}

	.btn:not(.btn--small) {
		border: none;
		border-radius: 0;
	}

	.link:hover {
		.link__text {
			text-decoration: none;
		}
	}

	[role='menuitem'] {
		padding: 0.5rem 1rem;

		&:hover,
		&:focus,
		&:active {
			color: ${tokens.colors.gray900};
			background: ${tokens.colors.paleCyan100};
		}
	}

	@media only screen and (min-width: ${tokens.breakpoints.l}) {
		flex-direction: row;
		align-items: center;
	}
`;
export const Logo = styled(Item).attrs({
	className: 'header-bar__logo',
})<{ full: boolean }>(
	({ full }) => `
	max-width: ${full ? 'auto' : '6rem'};

	svg {
		height: ${tokens.sizes.xl};
		width: ${full ? 'auto' : tokens.sizes.xl};
	}
`,
);
export const Brand = styled(Item).attrs({
	className: 'header-bar__brand',
})`
	flex: 1 0 auto;
	${borderLeft}

	@media only screen and (min-width: ${tokens.breakpoints.l}) {
		flex-grow: 0;
	}
`;
export const MenuDisclosure = styled(Button).attrs({
	className: 'header-bar__menu-disclosure',
})`
	margin-left: auto;
	padding: 1.5rem;
	min-height: 4.8rem;
	border: none;
	border-radius: 0;
	overflow: hidden;

	&,
	&:hover,
	&:focus,
	&:active {
		color: ${tokens.colors.gray0};
	}

	&:hover {
		background: ${transparentize(0.8, tokens.colors.gray0)};
	}

	&:active {
		background: ${transparentize(0.9, tokens.colors.gray0)};
	}

	&.btn {
		.btn__icon {
			margin: 0;
		}
		.btn__text {
			${hideVisually()};
		}
	}

	rect {
		transform-origin: 50% 50%;
		transition: transform 0.2s ease-out;
	}

	&[aria-expanded='true'] {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 1;

		rect {
			transform: scaleX(0);

			&:first-child {
				transform: translate(-0.5rem, 0.5rem) rotate(45deg);
			}

			&:last-child {
				transform: translate(-0.5rem, -0.5rem) rotate(-45deg);
			}
		}
	}
`;
export const Menu = styled.div.attrs({
	className: 'header-bar__menu',
})`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	padding-top: 5rem;
	height: 100vh;
	width: 100vw;
	background: linear-gradient(133deg, ${tokens.colors.deepBlue}, ${tokens.colors.russianViolet});
	opacity: 0;
	overflow: auto;
	transition: opacity 0.2s ease-in-out;

	&[data-enter] {
		opacity: 1;
	}

	[role='menu'] {
		margin-left: 2rem;
		position: static !important;
		transform: none !important;

		> * {
			max-width: none;
			background: none;
			box-shadow: none;
		}
	}

	[role='menuitem'] {
		color: ${tokens.colors.gray0};
	}
`;
const ContentArea = styled.div.attrs({
	className: 'header-bar__content',
})`
	display: flex;
	flex-direction: column;
	flex: 0 0 auto;

	@media only screen and (min-width: ${tokens.breakpoints.l}) {
		flex-direction: row;
	}
`;
export const ContentLeft = styled(ContentArea).attrs({
	className: 'header-bar__content--left',
})`
	@media only screen and (min-width: ${tokens.breakpoints.l}) {
		${Item} {
			${borderLeft}
		}
	}
`;
export const ContentRight = styled(ContentArea).attrs({
	className: 'header-bar__content--right',
})`
	// Display Toggle labels for mobiles and tablets
	.btn__text--hidden {
		position: static;
		clip: none;
		height: auto;
		width: auto;
	}

	@media only screen and (min-width: ${tokens.breakpoints.l}) {
		margin-left: auto;

		${Item} + ${Item} {
			${borderLeft}
		}

		.btn__text--hidden {
			${hideVisually()};
		}
	}
`;
