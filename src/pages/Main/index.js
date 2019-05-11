
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {
  Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation,
} from './styles';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Menu from '~/components/Menu';
import Tabs from '~/components/Tabs';

export default function Main() {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY, //aqui pode pegar o x tambem
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {

  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }],
          }}
          >
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
        </PanGestureHandler>
        
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
