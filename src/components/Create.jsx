import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Input } from 'semantic-ui-react';

import * as actions from '../store/actions'


const CreateModal = ({ state, onClose, createTask }) => {
  const [title, setTitle] = useState('');

  const onCreateTask = (title) => {
    if(!title){
      return
    }
    createTask(title)
    onClose('createModalState',false)
  }

  return (
    <Modal size={'tiny'} open={state} onClose={() => onClose('createModalState',false)} closeIcon>
      <Modal.Header>Cоздать задачу</Modal.Header>
      <Modal.Content>
        <Input
          fluid
          placeholder='Краткое описание'
          onChange={(e) => setTitle(e.target.value)} />
      </Modal.Content>
      <Modal.Actions>
        <Button 
          positive 
          icon='checkmark' 
          labelPosition='right' 
          content='Создать' 
          onClick={() => onCreateTask(title)}/>
      </Modal.Actions>
    </Modal>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  createTask: (title) => dispatch(actions.createTask(title))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateModal)