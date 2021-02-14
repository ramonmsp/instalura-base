import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';

import Logo from '../../../theme/Logo';
import { Button } from '../Button';
import Text from '../../foundation/Text';



const Menu = () => {

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
  ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.Central>
        {links.map(link => {
          return (
            <li key={link.url}>
              <Text tag='a' variant='smallestException' href={link.url}>
                {link.texto}
              </Text>
            </li>
          )
        })}
      </MenuWrapper.Central>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">Entrar</Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

export default Menu;