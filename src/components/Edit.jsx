import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Input } from 'semantic-ui-react';

import * as actions from '../store/actions'


const EditModal = ({ state, onClose, editing, editTask }) => {
  const [title, setTitle] = useState('');

  const onEdit = (title) => {
    if(!title){
      return
    }
    editTask({title, index: editing.index, id: editing.id})
    onClose('editModalState',false)
  }

  return (
    <Modal size={'tiny'} open={state} onClose={() => onClose('editModalState',false)} closeIcon>
      <Modal.Header>Редактировать задачу</Modal.Header>
      <Modal.Content>
        <Input
          fluid
          placeholder='Краткое описание'
          defaultValue={editing.title}
          onChange={(e) => setTitle(e.target.value)} />
      </Modal.Content>
      <Modal.Actions>
        <Button 
          positive 
          icon='checkmark' 
          labelPosition='right' 
          content='Сохранить' 
          onClick={() => onEdit(title)}/>
      </Modal.Actions>
    </Modal>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  editTask: ({title,index,id}) => dispatch(actions.editTask({index, title,id}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal)