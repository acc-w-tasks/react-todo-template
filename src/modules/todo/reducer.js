import * as actions from '../../store/actions'

export default (state = [{title: 'First task'}], action) => {
  switch (action.type){
    case actions.GET_TASK_LIST:
      return [
        ...action.list
      ]
    case actions.CREATE_TASK:
      return [
        ...state,
        { title: action.title }
      ]
    case actions.REMOVE_TASK:
      return [
        ...state.filter((itm,i) => i !== action.index)
      ]
    case actions.EDIT_TASK:
      const { index, title } = action.payload
      return [
        ...state.map((itm,i) => {
          if(i === index) itm.title = title
          return itm
        })
      ]
    default: 
      return state
  }
}