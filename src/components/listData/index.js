import React, { useEffect } from 'react';
import { Container, LoadState, Header, Content, Cars } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as carsActions from 'store/modules/cars/actions';
import { Icon } from 'semantic-ui-react';
import Table from './table';

const ListData = ({ carsReducer, carsRequest, deleteCarsRequest, selectCar }) => {

  useEffect(() => {
    const requestCars = async () => {
      carsRequest()
    }
    requestCars()
  }, [carsRequest])

  const editHandler = (item) => {
    selectCar(item)
  } 

  const deleteCarHandler = (id) => {
    deleteCarsRequest(id)
  }

  const { load, cars, deleteCarLoad, selectedCar, deleteCarId } = carsReducer

  return (
    <Container>
      <Header>
        <span>Veículos</span>
      </Header>
      <Content>
        {
          load 
          ?
          <LoadState>
            <Icon loading name='spinner' size='big' />
          </LoadState>
          :
          <Cars>
            <Table cars={cars} 
              editCar={editHandler} 
              deleteCar={deleteCarHandler} 
              deleteCarLoad={deleteCarLoad}
              selectedCar={selectedCar}
              deleteCarId={deleteCarId}
            />
          </Cars>
        }
      </Content>
      
    </Container>
  );
}

const mapStateToProps = state => ({
  carsReducer: state.carsReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(carsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListData);
