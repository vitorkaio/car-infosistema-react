import React from 'react';
import { Container, IconClick } from './styles';
import { Icon, Table, Popup, Button} from 'semantic-ui-react'

export default function table({ cars, editCar, deleteCar, deleteCarLoad }) {
  return (
    <Container>
      <Table basic='very' celled  singleLine>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell >Placa</Table.HeaderCell>
            <Table.HeaderCell>Chassi</Table.HeaderCell>
            <Table.HeaderCell>Renavam</Table.HeaderCell>
            <Table.HeaderCell>Modelo</Table.HeaderCell>
            <Table.HeaderCell>Marca</Table.HeaderCell>
            <Table.HeaderCell>Ano</Table.HeaderCell>
            <Table.HeaderCell>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {
          cars.map((item, key) => {
            return (
                <Table.Body key={key}>
                  <Table.Row>
                    <Table.Cell>{item.board}</Table.Cell>
                    <Table.Cell>{item.chassis}</Table.Cell>
                    <Table.Cell>{item.renavam}</Table.Cell>
                    <Table.Cell>{item.model}</Table.Cell>
                    <Table.Cell>{item.brand}</Table.Cell>
                    <Table.Cell>{item.year}</Table.Cell>
                    <Table.Cell>
                      <IconClick onClick={() => editCar(item)}>
                        <Popup content='Editar' 
                          trigger={<Button icon size="mini" circular color="blue"><Icon name='edit' /></Button>} 
                          position='top center' 
                        />
                      </IconClick>
                      <IconClick onClick={() => deleteCar(item._id)}>
                        <Popup content='Deletar' 
                          trigger={<Button icon size="mini" circular color="red"><Icon name='delete' disabled={deleteCarLoad} /></Button>} 
                          position='top center' 
                        />
                      </IconClick>
                      </Table.Cell>
                  </Table.Row>
                </Table.Body>
            );
          })
        }
      </Table>
    </Container>
  );
}
