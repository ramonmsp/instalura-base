import React from 'react'
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const TextStyleVariantsMap = {

    paragraph1: css`
        font-size: ${({ theme }) => { theme.typographyVariants.paragraph1.fontSize }};    
        font-weight: ${({ theme }) => { theme.typographyVariants.paragraph1.fontWeight }};   
        line-height: ${({ theme }) => { theme.typographyVariants.paragraph1.LineHeight }};
    `,

    paragraph2: css`
    font-size: ${({ theme }) => { theme.typographyVariants.paragraph2.fontSize }};    
    font-weight: ${({ theme }) => { theme.typographyVariants.paragraph2.fontWeight }};   
    line-height: ${({ theme }) => { theme.typographyVariants.paragraph2.LineHeight }};
    `,

    smallestException: css`
    font-size: ${({ theme }) => { theme.typographyVariants.smallestException.fontSize }};   
    font-weight: ${({ theme }) => { theme.typographyVariants.smallestException.fontWeight }};   
    line-height: ${({ theme }) => { theme.typographyVariants.smallestException.LineHeight }};
    `,
}

const TextBase = styled.span`
    ${({ variant }) => TextStyleVariantsMap[variant]}
`;

const Text = ({ tag, variant, children }) => {

    return (
        <TextBase
            as={tag}
            variant={variant}
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