import Axios from "axios";

export const CREATE_TASK = 'CREATE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const GET_TASK_LIST = 'GET_TASK_LIST'

export const getTaskList = () => {
  return Axios.get('/list').then(response => ({
    type: GET_TASK_LIST,
    list: response.data.data
  }))
}

export const createTask = (title) => {
  return Axios.post('/list', { title }).then(data => {
    return {
      type: CREATE_TASK,
      title
    }
  })
}

export const removeTask = (index, id) => {
  return Axios.delete(`/list/${id}`).then(response => ({
    type: REMOVE_TASK,
    index,
    id
  }))
}

export const editTask = ({ index, title, id }) => {
  return Axios.post(`/list/${id}`,{ title }).then(repsonse => ({
    type: EDIT_TASK,
    payload: {
      index,
      title
    }
  }))
}




