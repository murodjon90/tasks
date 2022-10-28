import React, {useState} from 'react';
import { connect } from "react-redux";
import ModalForm from "./Components/Services/ModalForm";
import Tasks from "./Components/Tasks";
import * as types from './Redux/storeType';

function App({types, tasks, openModal, isOpen, method, changeMethod }) {

  
  function openModalForm(e){
    changeMethod('add')
    openModal(!isOpen)
  }
  
  return (
    <div className="container">
      <div className="shadow mb-4 p-3">
        <h1>All Tasks: {tasks.length}</h1>
      </div>
      <div className="row">
        {types.map((el,i)=><div className="col-4" key={i}>
          <Tasks type={el}/>
          <button onClick={openModalForm} className="btn btn-dark mt-3">Add Task</button>
          <ModalForm 
            toggle={openModalForm} 
            isOpen={isOpen} 
            type={el} 
            method={method} 
          />
        </div>)}
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return{
    types: state.types,
    tasks: state.tasks,
    isOpen: state.isOpen,
    method: state.method,
    editTask: state.editTask
  }
}

function mapDispatchToProps(dispatch){
  return{
    openModal:(isOpen)=>dispatch({type:types.OPEN_MODAL, payload:isOpen}),
    changeMethod:(method)=>dispatch({type:types.CHANGE_METHOD, payload:method}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
