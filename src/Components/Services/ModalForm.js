import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as types from "../../Redux/storeType";

function ModalForm({toggle,isOpen,selects,tasks,type,method,addTask,getEditTask,editData}) {
  
  function submitData(e) {
    e.preventDefault();

    let data;

    if (e.target[0].value !== "") {
      data = {
        id: tasks.length + 1,
        name: e.target[0].value,
        type: e.target[1].value,
      };
      if (method === "add") {
        addTask(data);
      }
    }


    if (method === "edit") {
      let data = tasks.map(el=>{
        if (el.id === getEditTask.id) {
          return {
            id: el.id,
            name: e.target[0].value,
            type: e.target[1].value,
          }
        }else{
          return el
        }
      })
      editData(data)  
    }
    
    e.target.reset();
    e.target[0].value='';
    
    toggle(!isOpen)
  }

  return (
    <div>
      {type === "open" ||type === "inprogress" || type === "complated" && (
          <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
              <form id="form" onSubmit={submitData}>
                Name:
                <input type="text" className="form-control" defaultValue={method==='edit'?getEditTask.name:''} name="name" />
                <select className="form-select" defaultValue={method==='edit'?getEditTask.type:''} name="type">
                  {selects.map((el, i) => (
                    <option key={i}>{el}</option>
                  ))}
                </select>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" className="addOrEdit" form={"form"}>
                {method}
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    selects: state.types,
    getEditTask: state.getEditTask
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (task) => dispatch({ type: types.ADD_TASK, payload: task }),
    editTask: (edit) => dispatch({ type: types.EDIT_TASK, payload: edit }),
    editData: (edit) => dispatch({ type: types.EDIT_DATA, payload: edit }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
