import React, { Component } from 'react'

import { Button, Container, Icon, Table } from 'semantic-ui-react'


const TasksList = ({ list, onOpenEditModal, onRemove }) => (
  <Container>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Number</Table.HeaderCell>
          <Table.HeaderCell width={10}>Description</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {list.map((task, i) => (
          <Table.Row key={i} >
            <Table.Cell>Задача №-{i+1}</Table.Cell>
            <Table.Cell>{task.title}</Table.Cell>
            <Table.Cell textAlign='center'>
              <Button icon='edit' onClick={() => onOpenEditModal(i)}></Button>
              <Button icon='trash' color='red' onClick={() => onRemove(i,task.id)}></Button>
            </Table.Cell>
          </Table.Row>
        ))} 
        {!list.length && (
        <Table.Row>
          <Table.Cell textAlign='center'></Table.Cell>
          <Table.Cell textAlign='center'>Список пуст</Table.Cell>
          <Table.Cell textAlign='center'></Table.Cell>
        </Table.Row>
        )}
      </Table.Body>
    </Table>
  </Container>
)

export default TasksList