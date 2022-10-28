import { connect } from "react-redux";
import * as types from '../Redux/storeType'

function TaskTypes({el,tasks,openModal,isOpen,changeMethod,editData, deleteData}) {
  function edit(id) {
    openModal(!isOpen)
    changeMethod('edit')
    const data = tasks.filter((el)=>el.id === id)
    editData(data[0])
  }
  
  function deleteTask(id){
    let delData = tasks.filter(el=>el.id!==id)
    deleteData(delData);
  }
  
  return (
    <div>
      <div className="shadow p-3 rounded mt-3 "> 
        <div className='d-flex align-items-center justify-content-between'>
          <span className='fs-5'>{el.name}</span>
          <div className='d-flex flex-column gap-2'>
            <button className='btn btn-success px-1 py-0' onClick={()=>edit(el.id)}>
              <i className="bi bi-pencil"></i>
            </button>
            <button className='btn btn-success px-1 py-0' onClick={()=>deleteTask(el.id)}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
function mapStateToProps(state) {
  return{
    tasks:state.tasks,
    isOpen: state.isOpen,
  }
}
function mapDispatchToProps(dispatch) {
  return{
    openModal:(isOpen)=>dispatch({type:types.OPEN_MODAL, payload:isOpen}),
    changeMethod:(method)=>dispatch({type:types.CHANGE_METHOD, payload:method}),
    editData:(editData)=>dispatch({type:types.EDIT_TASK, payload:editData}),
    deleteData:(delData)=>dispatch({type:types.DELETE_DATA, payload:delData})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskTypes)
