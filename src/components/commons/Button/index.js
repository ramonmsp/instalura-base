/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import Link from '../Link';
import { TextStyleVariants } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    background: transparent;
    
`;

const ButtonDefault = css`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};

`;

const ButtonWrapper = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1.0;
    transition: ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${function ({ ghost }) {
    if (ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
    &:hover,
    &focus {
    opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariants.smallestException}
        `,
    md: css`
        ${TextStyleVariants.paragraph1}
        `,
  })}

    ${propToStyle('margin')};
    ${propToStyle('display')};

    &:disabled {
      cursor: not-allowed;
      opacity: .2;
    };
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

`;

const Button = ({ href, ...props }) => {
  const isLink = Boolean(href);
  const componentTag = isLink ? Link : 'button';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={componentTag} href={href} {...props} />
  );
};

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
};

export default Button;
