import React from 'react';
import { shade, tint } from 'polished';
import styled from 'styled-components';
import { VisuallyHidden } from 'reakit';
import Button from '../../../Button';
import Link from '../../../Link';
import { Icon } from '../../../Icon';
import Input from './Input';
import tokens from '../../../../tokens';

const FileField = styled.div`
	width: 100%;

	.input {
		&,
		&::-webkit-file-upload-button {
			height: 100%;
			width: 100%;
			cursor: pointer;
		}

		&--filled {
			pointer-events: none;
		}

		&:focus + .input-file__text {
			border: 2px solid ${({ theme }) => theme.colors.inputFocusBorderColor};
			border-radius: ${tokens.radii.inputBorderRadius};
			outline: 0.3rem solid ${({ theme }) => theme.colors.focusColor};
		}
	}

	.input-file {
		position: relative;
		border: 1px dashed ${({ theme }) => theme.colors.inputBorderColor};
		border-radius: ${tokens.radii.inputBorderRadius};

		&:hover {
			border-color: ${({ theme }) => theme.colors.inputHoverBorderColor};

			.text__icon {
				fill: ${({ theme }) => theme.colors.inputHoverBorderColor};
			}
		}

		&--dragging {
			background: ${({ theme }) => tint(0.95, theme.colors.activeColor)};
			border: 2px dashed ${({ theme }) => theme.colors.activeColor};

			.text__icon {
				fill: ${({ theme }) => theme.colors.activeColor};
			}
		}

		&__text,
		&__preview,
		&__input {
			min-height: ${tokens.sizes.xxl};
		}

		&__input {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			opacity: ${tokens.opacity.transparent};
		}
	}

	.text {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${({ theme }) => theme.colors.inputPlaceholderColor};

		&__icon {
			position: static;
			margin: 0 1rem;
			width: ${tokens.sizes.l};
			color: ${({ theme }) => theme.colors.textColor};
		}
	}

	.preview {
		display: flex;
		align-items: baseline;
		padding: 0 1rem;

		&__list {
			margin: 0;
			padding: 0;
			list-style: none;

			&-item {
				color: ${({ theme }) => theme.colors.inputColor};
			}
		}

		&__button {
			position: static;
			margin-left: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: ${tokens.sizes.xxl};
			border: none;

			svg {
				position: static;
				width: ${tokens.sizes.l};
				color: ${({ theme }) => theme.colors.textColor};
			}

			&:hover {
				svg path {
					fill: ${({ theme }) => shade(0.25, theme.colors.activeColor)};
				}
			}
		}
	}
`;

function getFileSize(size) {
	if (size < 1024) {
		return `${size}bytes`;
	} else if (size > 1024 && size < 1048576) {
		return `${(size / 1024).toFixed(1)}KB`;
	} else if (size > 1048576) {
		return `${(size / 1048576).toFixed(1)}MB`;
	}
}

function InputFile(props) {
	const [drag, setDrag] = React.useState(false);
	const [files, setFiles] = React.useState(props.files);

	const inputRef = React.useRef();

	React.useEffect(() => {
		const input = inputRef.current;
		input?.addEventListener('dragenter', handleDragIn);
		input?.addEventListener('dragleave', handleDragOut);
		input?.addEventListener('drop', handleDrop);
		input?.addEventListener('change', handleChange);

		return () => {
			const input = inputRef.current;
			input?.removeEventListener('dragenter', handleDragIn);
			input?.removeEventListener('dragleave', handleDragOut);
			input?.removeEventListener('drop', handleDrop);
			input?.removeEventListener('change', handleChange);
		};
	}, []);

	function handleChange() {
		const input = inputRef.current;
		setFiles(() => [...input.files]);
	}

	function clear() {
		const input = inputRef.current;
		input.value = '';
		setFiles(() => null);
	}

	function handleDragIn(e) {
		if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
			setDrag(() => true);
		}
	}

	function handleDragOut(e) {
		setDrag(() => false);
	}

	function handleDrop(e) {
		setDrag(() => false);
	}

	const id = `info-${Math.round(Math.random() * 1e5)}`;

	return (
		<FileField aria-describedby={id}>
			{props.readOnly ? (
				<Input
					{...props}
					value={files
						?.map(file =>
							typeof file === 'string' ? file : `${file.name} (${getFileSize(file.size)})`,
						)
						.join(';')}
				/>
			) : (
				<div id={id} className={`input-file ${drag ? 'input-file--dragging' : ''}`}>
					<input
						type="file"
						{...props}
						className={`input-file__input input ${files ? 'input--filled' : ''}`}
						ref={inputRef}
					/>
					{!files ? (
						<div className="input-file__text text">
							<Icon className="text__icon" name="talend-upload" />{' '}
							<span className="text__span">
								Drop your files or <Link className="text__link">browse</Link>
							</span>
						</div>
					) : (
						<div className="input-file__preview preview">
							<VisuallyHidden>You have selected:</VisuallyHidden>
							<ol role="list" className="preview__list">
								{files.map((file, index) => (
									<li key={index} className="preview__list-item">
										{typeof file === 'string' ? file : `${file.name} (${getFileSize(file.size)})`}
									</li>
								))}
							</ol>
							<Button.Icon icon="talend-cross-circle" className="preview__button" onClick={clear}>
								Clear selection
							</Button.Icon>
						</div>
					)}
				</div>
			)}
		</FileField>
	);
}

function File(props) {
	return <Input as={InputFile} {...props} />;
}

export default File;
