import React, { useState, useEffect, useCallback } from 'react';
import { Container, InputCss, SubmitButton, FormError } from './styles';
import { Input, Button } from 'semantic-ui-react';
import { produce } from 'immer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as carsActions from 'store/modules/cars/actions';
import InputMask from 'react-input-mask';

const Form = ({ carsReducer, createCarsRequest, createCarsReset, updateCarsRequest, updateCarsResete, setTitleUpdate, selectCar }) => {

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
    if (carsReducer.updateCarError) updateCarsResete()

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
    console.log('reset')
    setControl(prev => { return produce(prev, draft => {
      for (let item in prev) {
        if (item === 'validateForm') {
          draft[item] = false
        }
        else {
          draft[item].value = ''
        }
      }
    })})
  }, []);


  const updateCar = useCallback(() => {
    setControl(pre => { return produce(pre, draft => {
      for (let item in pre) {
        if (item === 'validateForm') {
          draft[item] = true
        }
        else if(carsReducer.selectedCar) {
          draft[item].value = carsReducer.selectedCar[item]
        }
      }
    })})
  }, [carsReducer.selectedCar]);


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
    if (carsReducer.selectedCar === null) {
      resetFields()
    }
  }, [carsReducer.selectedCar, resetFields])


  useEffect(() => {
    setTitleUpdate(false)
    if (carsReducer.selectedCar) {
      setTitleUpdate(true)
      updateCar()
    }
  }, [carsReducer.selectedCar, setTitleUpdate, updateCar])

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

  const handlerUpdateSubmit = (event) => {
    const newCar = {
      id: carsReducer.selectedCar._id,
      board: control.board.value,
      chassis: control.chassis.value,
      renavam: control.renavam.value,
      model: control.model.value,
      brand: control.brand.value,
      year: control.year.value
    }
    updateCarsRequest(newCar);
    event.preventDefault()
  }


  const cancleHandlerForm = () => {
    resetFields()
    selectCar(null)
  }

  return (
    <Container onSubmit={carsReducer.selectedCar ? handlerUpdateSubmit : handlerSubmit}>
      <InputCss>
        <InputMask mask={control.board.isValid.mask} 
          value={control.board.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'board')}>
          {(inputProps) => <Input {...inputProps} label='Placa' placeholder='AAA-9999' size="small" fluid />}
        </InputMask>
      </InputCss>

      <InputCss>
        <InputMask mask={control.chassis.isValid.mask} 
          value={control.chassis.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'chassis')}>
          {(inputProps) => <Input {...inputProps} label='Chassi' placeholder='9AA999AA99A999999' size="small" fluid />}
        </InputMask>
      </InputCss>

      <InputCss>
        <InputMask mask={control.renavam.isValid.mask} 
          value={control.renavam.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'renavam')}>
          {(inputProps) => <Input {...inputProps} label='Renavam' placeholder='99999999999' size="small" fluid />}
        </InputMask>
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
        <InputMask mask={control.year.isValid.mask} 
          value={control.year.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'year')}>
          {(inputProps) => <Input {...inputProps} label='Ano' placeholder='Digite o Ano' size="small" fluid />}
        </InputMask>
      </InputCss>

      {/* <InputCss>
        <InputMask mask={control.year.isValid.mask} value={control.year.value} 
          onChange={(e) => controlInputHandler(e.target.value, 'year')}>
            {(inputProps) => <Input {...inputProps} label='Ano' placeholder='Digite o ano' size="small" fluid/>}
        </InputMask>
      </InputCss> */}

      <>
      {
        carsReducer.createCarError || carsReducer.updateCarMsg
        ?
        <FormError>
          <span>{carsReducer.createCarMsg ? carsReducer.createCarMsg : carsReducer.updateCarMsg}</span>
        </FormError>
        :        
        <SubmitButton>
          <Button primary fluid disabled={!control.validateForm} 
            loading={carsReducer.createCarLoad || carsReducer.updateCarLoad}>
            {
              carsReducer.selectedCar
              ?
              'Atualizar'
              :
              'Adicionar'
            }
          </Button>
        <Button color='red' fluid onClick={cancleHandlerForm} type="button" >Cancelar</Button>
      </SubmitButton>
      }
      </>
      <input type="submit" value="Enviar" hidden />
    </Container>
  );
}

const mapStateToProps = state => ({
  carsReducer: state.carsReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(carsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
