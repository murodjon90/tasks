import * as types from '../storeType'

export default function taskReducer(state={
  tasks:[
    {
      id:1,
      name:'Create a role',
      type: 'open',
    },
    {
      id:2,
      name:'Create a role for admin panel',
      type: 'inprogress',
    },
    {
      id:3,
      name:'Create a role for website',
      type: 'complated',
    },
    {
      id:4,
      name:'Create a role for website',
      type: 'open',
    },
    {
      id:5,
      name:'Create a role for website',
      type: 'complated',
    },
  ],
  types:['open', 'inprogress', 'complated'],
  isOpen: false,  
  method: '',
  getEditTask: ''
}, action){
  switch (action.type) {
    case types.ADD_TASK:
      state = {...state, tasks:[...state.tasks, action.payload]}
      break;
    case types.OPEN_MODAL:
      state = {...state, isOpen: action.payload}
      break;
    case types.CHANGE_METHOD:
      state = {...state, method: action.payload}
      break;
    case types.EDIT_TASK:
      state = {...state, getEditTask: action.payload}
      break;
    case types.EDIT_DATA:
      state = {...state, tasks:action.payload}
      break;
    case types.DELETE_DATA:
      state = {...state, tasks:action.payload}
      break;
  }
  
  return state
}