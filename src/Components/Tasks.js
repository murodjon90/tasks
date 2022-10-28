import React from 'react'
import { connect } from 'react-redux'
import TaskTypes from './TaskTypes'

function Tasks({type,tasks}) {
  return (
    <div>
      <div className="shadow d-flex align-items-start justify-content-between p-4">
        <h1>{type}</h1>
        <span className='badge text-white fs-6 bg-danger '>{tasks.filter(types=>types.type===type).length}</span>
      </div>
      {
        tasks.filter(types=>types.type===type).map((el, i)=><div key={i}>
          <TaskTypes key={i} el={el} />
        </div>)
      }
      
    </div>
  )
}

function mapStateToProps(state){
  return{
    tasks: state.tasks,
  }
}

function mapDispatchToProps(dispatch){
  return{
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
