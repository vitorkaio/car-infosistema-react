import React, { useState, useEffect, useCallback } from 'react';
import { Container, InputCss, SubmitButton } from './styles';
import { Input, Button } from 'semantic-ui-react';
import { produce } from 'immer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as carsActions from 'store/modules/cars/actions';
// import InputMask from 'react-input-mask';

const Form = ({ carsReducer, createCarsRequest, createCarsReset }) => {

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
        mask: "9999"
      }
    },
    validateForm: false
  })

  const controlInputHandler = (data, type) => {

    // Se for true é pq houve um erro, reseta os campos
    if (carsReducer.createCarError) createCarsReset()

    setControl(produce(control, draft => {
      draft[type].value = data
    }));  
  }


  const validateForm = useCallback(() => {
    setControl(produce(control, draft => {
      let dirty = true;
      for (let item in control) {
        if (item === 'validateForm')
          continue
        if (draft[item].value.length === 0) {
          dirty = false;
        }
      }
      if (dirty) draft.validateForm = true;
      else draft.validateForm = false;
    }))
  }, [control]);

  const resetFields = useCallback(() => {
    setControl(produce(control, draft => {
      for (let item in control) {
        if (item === 'validateForm' && carsReducer.createCarSuccess) {
          draft[item] = false
        }
        else if(carsReducer.createCarSuccess) {
          draft[item].value = ''
        }
      }
    }))
  }, [control, carsReducer.createCarSuccess]);


  const updateCar = useCallback(() => {
    setControl(produce(control, draft => {
      for (let item in control) {
        if (item === 'validateForm') {
          draft[item] = true
        }
        else if(carsReducer.selectedCar) {
          draft[item].value = carsReducer.selectedCar[item]
        }
      }
    }))
  }, [control, carsReducer.selectedCar]);


  useEffect(() => {
    validateForm()
  }, [control, validateForm])

  useEffect(() => {
    if (carsReducer.createCarSuccess) {
      resetFields()
      createCarsReset()
    }
  }, [carsReducer.createCarSuccess, resetFields, createCarsReset])


  useEffect(() => {
    if (carsReducer.selectedCar) {
      updateCar()
    }
  }, [carsReducer.selectedCar, updateCar])

  const handlerSubmit = (event) => {
    const newCar = {
      board: control.board.value,
      chassis: control.chassis.value,
      renavam: control.renavam.value,
      model: control.model.value,
      brand: control.brand.value,
      year: control.year.value
    }
    createCarsRequest(newCar);
    event.preventDefault()
  }

  return (
    <Container onSubmit={handlerSubmit}>
      <InputCss>
        <Input label='Placa' 
          placeholder='Digite a placa' 
          size="small" 
          fluid 
          onChange={(e) => controlInputHandler(e.target.value, 'board')}
          value={control.board.value}
        />
      </InputCss>

      <InputCss>
        <Input label='Chassi' 
          placeholder='Digite o chassi' 
          size="small" 
          fluid 
          onChange={(e) => controlInputHandler(e.target.value, 'chassis')}
          value={control.chassis.value}
        />
      </InputCss>

      <InputCss>
        <Input label='Renavam' 
          placeholder='Digite o renavam' 
          size="small" 
          fluid 
          onChange={(e) => controlInputHandler(e.target.value, 'renavam')}
          value={control.renavam.value}
        />
      </InputCss>

      <InputCss>
        <Input label='Modelo' 
          placeholder='Nome do Modelo' 
          size="small" 
          fluid 
          onChange={(e) => controlInputHandler(e.target.value, 'model')}
          value={control.model.value}
        />
      </InputCss>

      <InputCss>
        <Input label='Marca' 
          placeholder='Nome da Marca' 
          size="small" 
          fluid 
          onChange={(e) => controlInputHandler(e.target.value, 'brand')}
          value={control.brand.value}
        />
      </InputCss>

      <InputCss>
        <Input label='Ano' 
          placeholder='Digite o ano' 
          size="small" 
          fluid 
          onChange={(e) => controlInputHandler(e.target.value, 'year')}
          value={control.year.value}
        />
      </InputCss>

      {/* <InputCss>
        <InputMask mask={control.year.isValid.mask} value={control.year.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'year')}>
            {(inputProps) => <Input {...inputProps} label='Ano' placeholder='Digite o ano' size="small" fluid/>}
        </InputMask>
      </InputCss> */}

      <SubmitButton>
        {
          carsReducer.createCarError
          ?
          <span>{carsReducer.createCarMsg}</span>
          :
          <Button primary fluid disabled={!control.validateForm} loading={carsReducer.createCarLoad}>
            {
              carsReducer.selectedCar
              ?
              'Atualizar'
              :
              'Adicionar'
            }
          </Button>
        }
      </SubmitButton>
      <input type="submit" value="Enviar" hidden />
    </Container>
  );
}

const mapStateToProps = state => ({
  carsReducer: state.carsReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(carsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
