import React from 'react';
import styled from 'styled-components';
import { useCopyToClipboard } from 'react-use';
import Button from '../../../Button';
import InlineMessage from '../../../InlineMessage';
import InputGroup from './../InputGroup';
import Text from './Input.Text';

import tokens from '../../../../tokens';

const CopyButton = styled(Button.Icon)`
	padding: 0 ${tokens.space.s};
	height: ${tokens.sizes.xxl};
	background: ${({ theme }) => theme.colors.inputGroupInteractiveBackgroundColor};
	border-color: ${({ theme }) => theme.colors.inputBorderColor};
	border-radius: 0 ${tokens.radii.inputBorderRadius} ${tokens.radii.inputBorderRadius} 0;
`;

export type InputCopyProps = React.PropsWithChildren<any> & {
	value?: string;
};

const InputCopy = ({ value, ...rest }: InputCopyProps) => {
	const [text, setText] = React.useState(value);
	const [state, copyToClipboard] = useCopyToClipboard();

	return (
		<InputGroup
			label="Copy to clipboard"
			prefix={null}
			suffix={
				<CopyButton icon="talend-files-o" onClick={() => copyToClipboard(text)}>
					Copy to clipboard
				</CopyButton>
			}
		>
			<Text
				label="Token"
				value={text}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
				{...rest}
			/>
			{state.error ? (
				<InlineMessage.Destructive title="Unable to copy value" description={state.error.message} />
			) : (
				state.value && <InlineMessage.Success description={`Copied ${state.value}`} />
			)}
		</InputGroup>
	);
};

export default InputCopy;
