import * as React from 'react';
import styled from 'styled-components';
import { tint } from 'polished';
import InlineMessage, { InlineMessageProps } from '../InlineMessage';
import Icon from '../../Icon';

const StyledComponent = styled(InlineMessage)`
	color: ${({ theme }) => theme.colors.destructiveColor};
	background: ${(props) => props.withBackground && tint(0.9, props.theme.colors.destructiveColor)};
`;

const InlineMessageDestructive = React.forwardRef((props: InlineMessageProps, ref) => {
	return <StyledComponent icon={<Icon name={'cross'} />} {...props} ref={ref} />;
});

export default React.memo(InlineMessageDestructive);