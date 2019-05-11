import React from 'react';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Code, Nav, NavItem, NavText } from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://facebook.com"
          size={80}
          fgColor="#fff"
          bgColor="#8B10A3"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
    </Container>
  );
}
