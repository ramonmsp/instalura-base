import React from 'react'
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

const paragraph1 = css`
    ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const paragraph2 = css`
    ${({ theme }) => css`
    font-size: ${({ theme }) => { theme.typographyVariants.paragraph2.fontSize }};
    font-weight: ${({ theme }) => { theme.typographyVariants.paragraph2.fontWeight }};
    line-height: ${({ theme }) => { theme.typographyVariants.paragraph2.LineHeight }};
`}
`;

const smallestException = css`
    ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
    smallestException,
    paragraph1,
};

const TextBase = styled.span`
${({ variant }) => TextStyleVariants[variant]}
/* ${({ textAlign }) => {
        return {
            textAlign,
        }
    }} */
${(props) => propToStyle('textAlign')} 
`;



const Text = ({ tag, variant, children, ...props }) => {

    return (
        <TextBase
            as={tag}
            variant={variant}
            {...props}
        >
            {children}

        </TextBase>
    )
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1'
}

export default Text;