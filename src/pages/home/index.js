import React from 'react';
import { Container, Content } from './styles';
import InputData from 'components/inputData';
import ListData from 'components/listData';
import Header from 'components/header';

export default function home() {
  return (
    <Container>
      <Header />
      <Content>
        <InputData />
        <ListData />
      </Content>
    </Container>
  );
}
