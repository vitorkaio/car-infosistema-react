import React, { useEffect } from 'react';
import { Container, LoadState, Header, Content, Cars } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as carsActions from 'store/modules/cars/actions';
import { Icon } from 'semantic-ui-react';
import Table from './table';

const ListData = ({ carsReducer, carsRequest }) => {

  useEffect(() => {
    const requestCars = async () => {
      carsRequest()
    }
    requestCars()
  }, [carsRequest])

  const editHandler = (item) => {
    console.log(item);
  } 

  const { load, cars } = carsReducer

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
            <Table cars={cars} editCar={editHandler} />
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
