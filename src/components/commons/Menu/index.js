import React from 'react';
import PropTypes from 'prop-types';
import MenuWrapper from './styles/MenuWrapper';
import Logo from '../../../theme/Logo';
import Button from '../Button';
import Text from '../../foundation/Text';

const Menu = ({ onCadastrarClick }) => {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas Frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.Central>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestExcepton" tag="a" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.Central>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">Entrar</Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};

export default Menu;
