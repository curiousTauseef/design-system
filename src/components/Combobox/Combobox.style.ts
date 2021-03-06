import styled from 'styled-components';

import tokens from '../../tokens';

export const Combobox = styled.div(
	({ theme }) => `
	[role='combobox'] {
        padding: 0 ${tokens.space.s}; 
        width: 100%;
        height: ${tokens.sizes.xxl};
        color: ${theme.colors.inputColor};
        font-size: ${tokens.fontSizes.normal};   
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        background: ${theme.colors.inputBackgroundColor};
        border: 1px solid ${theme.colors.inputBorderColor};
        border-radius: ${tokens.radii.inputBorderRadius};
	}
	
    [role='combobox']::placeholder {
        font-size: ${tokens.fontSizes.normal};
        color: ${theme.colors.inputPlaceholderColor};
    }

	[role='combobox']:hover {
	    border: 1px solid ${theme.colors.inputHoverBorderColor};  
	}
	
	[role='combobox']:focus {
	    border: 2px solid ${theme.colors.inputFocusBorderColor};  
	}

	[role='listbox'] {
		width: 250px;
		z-index: ${tokens.zIndices.dropdown};		
		padding: 0.5rem 0;
		border-radius: ${tokens.radii.rectRadius};
	    box-shadow: 0 2px 4px 0 ${tokens.colors.gray300};
	}

	[role='option'] {
		padding: 0.5rem;
		cursor: pointer;
	}

	[role='option']:hover {
		background-color: ${tokens.colors.gray75};  
	}

	[role='combobox']:focus + [role='listbox'] [aria-selected='true'] {
		color: ${tokens.colors.gray0};  
		background-color: ${theme.colors.activeColor};  
	}
`,
);
