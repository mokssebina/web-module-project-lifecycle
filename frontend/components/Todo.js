import React from 'react'

const TodoItem = (props) => {
  return (
    <div style={{display: "flex"}} onClick={props.completeTask}><p style={{marginRight: "5px"}}>{props.todo}</p>{props.completed ? <p>✔️</p> : null}</div>
  )
}

export default class Todo extends React.Component { 
  render() {
    return (
      <div>
        <TodoItem completeTask={this.props.completeTask} todo={this.props.todo} completed={this.props.completed} />
      </div>
    )
  }
}
