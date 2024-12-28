import React from 'react'
const TodoForm = (props) => {
  return (
    <form onSubmit={props.submitTodo}>
      <input type='text' placeholder='Type todo' value={props.todoText} onChange={props.handleChange} />
      <input type='submit' />
      <div style={{ marginTop: '15px' }}>
        <input type='button' value='Hide Completed' onClick={props.hideCompleted} />
      </div>
    </form>
  )
}

export default class Form extends React.Component {
  render() {

    return (
      <div>
        <TodoForm todoText={this.props.todoText} handleChange={this.props.handleChange} submitTodo={this.props.submitTodo} hideCompleted={this.props.hideCompleted} />
      </div>
    )
  }
}
