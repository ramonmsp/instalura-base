import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { propToStyle } from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const paragraph1 = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const title = css`
${({ theme }) => css`
  font-family: ${theme.fontFamily};
  font-size: ${theme.typographyVariants.titleXS.fontSize};
  font-weight: ${theme.typographyVariants.titleXS.fontWeight};
  line-height: ${theme.typographyVariants.titleXS.lineHeight};
`}
${breakpointsMedia({
    md: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.title.fontSize};
      font-weight: ${theme.typographyVariants.title.fontWeight};
      line-height: ${theme.typographyVariants.title.lineHeight};
    `}
  `,
  })}
`;

const smallestException = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
  smallestException,
  paragraph1,
  title,
};

const TextBase = styled.span`
    ${({ variant }) => TextStyleVariants[variant]}
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')} ;
    ${propToStyle('marginBottom')};
`;

// eslint-disable-next-line func-names
const Text = function ({
  tag, variant, children, href, ...props
}) {
  if (href) {
    return (
      <TextBase
        as={tag}
        href={href}
        variant={variant}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}

      </TextBase>
    );
  }
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}

    </TextBase>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
};

export default Text;
