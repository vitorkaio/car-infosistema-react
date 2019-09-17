import React, { useState } from 'react';
import { Container, Header, Content } from './styles';
import FormCars from 'components/form/FormCars'

export default function InputData() {

  const [isUpdate, setUpdate] = useState(false)

  const setTitleUpdate = (update) => {
      setUpdate(update)
  }

  return (
    <Container>
      <Header>
        {
          isUpdate
          ?
          <span>Atualizar veículo</span>
          :
          <span>Adicionar veículo</span>
        }
      </Header>
      <Content>
        <FormCars setTitleUpdate={setTitleUpdate}/>
      </Content>
    </Container>
  );
}
