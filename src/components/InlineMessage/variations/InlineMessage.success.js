import React from 'react';
import styled from 'styled-components';
import { tint } from 'polished';
import InlineMessage from '../InlineMessage';
import Icon from '../../Icon';

const StyledComponent = styled(InlineMessage)`
	color: ${(props) => props.theme.colors.successColor};
	background: ${(props) => props.withBackground && tint(0.9, props.theme.colors.successColor)};
`;

const InlineMessageSuccess = React.forwardRef((props, ref) => {
	return <StyledComponent icon={<Icon name={'check'} />} {...props} ref={ref} />;
});

InlineMessageSuccess.propTypes = InlineMessage.propTypes;

export default React.memo(InlineMessageSuccess);
