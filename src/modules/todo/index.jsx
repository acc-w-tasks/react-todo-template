import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Header from '../../components/Header'
import List from './containers/list'
import CreateModal from '../../components/Create'
import EditModal from '../../components/Edit'
import * as actions from '../../store/actions'


class ToDoList extends Component {
  state = {
    list: [],
    editingItem: {},
    createModalState: false,
    editModalState: false
  }
  componentDidMount() {
    this.props.actions.getTaskList().then(data => {
      this.setState(() => ({list: data.list}))
    })
  }
  setModalVisibility = (modalType, state) => {
    this.setState(() => ({ [modalType]: state }))
  }
  onOpenEditModal = (index) => {
    this.setState(() => ({ editingItem: { title: this.props.tasksList[index].title, id: this.props.tasksList[index].id,index } }), () => {
      this.setModalVisibility('editModalState',true)
    })
  }
  removeTask = (i,id) => {
    this.props.actions.removeTask(i,id)
  }
  render() {
    const { tasksList } = this.props
    return (
      <div>
        <Header title="Список задач" onOpenCreateModal={this.setModalVisibility} />
        <List
          list={tasksList}
          onRemove={this.removeTask}
          onOpenEditModal={this.onOpenEditModal} />
        <CreateModal
          state={this.state.createModalState}
          onClose={this.setModalVisibility} />
        <EditModal
          state={this.state.editModalState}
          editing={this.state.editingItem}
          onClose={this.setModalVisibility} />
      </div>
    )
  }
}

export default connect(
  state => ({
    tasksList: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(ToDoList)