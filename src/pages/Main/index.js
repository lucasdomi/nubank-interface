
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { Container, Content, Card, CardHeader, CardContent, 
  Title, Description, CardFooter, Annotation} from './styles';
import Header from '../../components/Header';
import Tabs from '~/components/Tabs';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 1.000</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferencia de R$ 10,00 recebido de Pedro Domingues as 18h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
