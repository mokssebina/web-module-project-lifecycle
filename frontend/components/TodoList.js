import React from 'react'
import Todo from './Todo'


export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todos:</h2>
        {this.props.todos.map((item, index) => (
          <Todo key={index} completeTask={() => this.props.completeTask(index)} todo={item.name} completed={item.completed} />
        ))}
      </div>
    )
  }
}
