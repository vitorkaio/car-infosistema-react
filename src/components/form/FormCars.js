import React, { useState } from 'react';
import { Container, InputCss, SubmitButton } from './styles';
import { Input, Button } from 'semantic-ui-react';
import { produce } from 'immer';
import InputMask from 'react-input-mask';

export default function Form() {

  const [control, setControl] = useState({
    board: {
      value: '',
      isValid: {
        mask: 'aaa-9999'
      }
    },
    chassis: {
      value: '',
      isValid: {
        mask: "9aa999aa99a999999"
      }
    },
    renavam: {
      value: '',
      isValid: {
        mask: "99999999999"
      }
    },
    model: {
      value: '',
      isValid: {
        mask: ""
      }
    },
    brand: {
      value: '',
      isValid: {
        mask: ""
      }
    },
    year: {
      value: '',
      isValid: {
        mask: "99/99/9999"
      }
    },
  })

  const controlInputHandler = (data, type) => {
    setControl(produce(control, draft => {
      draft[type].value = data
    }));  
  }

  const handlerSubmit = () => {
    console.log('submit');
  }

  return (
    <Container onSubmit={handlerSubmit}>
      <InputCss>
        <InputMask mask={control.board.isValid.mask} value={control.board.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'board')}>
            {(inputProps) => <Input {...inputProps} label='Placa' placeholder='AAA-9999' size="small" fluid/>}
        </InputMask>
      </InputCss>

      <InputCss>
        <InputMask mask={control.chassis.isValid.mask} value={control.chassis.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'chassis')}>
            {(inputProps) => <Input {...inputProps} label='Chassi' placeholder='9AA999AA99A999999' size="small" fluid/>}
        </InputMask>
      </InputCss>

      <InputCss>
        <InputMask mask={control.renavam.isValid.mask} value={control.renavam.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'renavam')}>
            {(inputProps) => <Input {...inputProps} label='Renavam' placeholder='99999999999' size="small" fluid/>}
        </InputMask>
      </InputCss>

      <InputCss>
        <InputMask mask={control.model.isValid.mask} value={control.model.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'model')}>
            {(inputProps) => <Input {...inputProps} label='Modelo' placeholder='Nome do Modelo' size="small" fluid/>}
        </InputMask>
      </InputCss>

      <InputCss>
        <InputMask mask={control.brand.isValid.mask} value={control.brand.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'brand')}>
            {(inputProps) => <Input {...inputProps} label='Marca' placeholder='Nome da Marca' size="small" fluid/>}
        </InputMask>
      </InputCss>

      <InputCss>
        <InputMask mask={control.year.isValid.mask} value={control.year.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'year')}>
            {(inputProps) => <Input {...inputProps} label='Ano' placeholder='dd/mm/yyyy' size="small" fluid/>}
        </InputMask>
      </InputCss>

      <SubmitButton>
        <Button primary fluid>Adicionar</Button>
      </SubmitButton>
      <input type="submit" value="Enviar" hidden />
    </Container>
  );
}
