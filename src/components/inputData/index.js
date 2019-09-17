import React from 'react';
import { Container, Header, Content } from './styles';
import { Button } from 'semantic-ui-react'
import FormCars from 'components/form/FormCars'

export default function InputData() {

  return (
    <Container>
      <Header>
        <span>Adicionar veículo</span>
      </Header>
      <Content>
        <FormCars/>
      </Content>
    </Container>
  );
}
