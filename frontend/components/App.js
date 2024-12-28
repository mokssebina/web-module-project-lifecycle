import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import axios from 'axios'


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todoText: '',
      todos: [],
      newTodoAdded: false,
    }
  }

  componentDidMount() {

    axios.get('http://localhost:9000/api/todos')
      .then(res => {

        console.log("result: ", res.data.data)
        this.setState({
          todos: res.data.data
        })

      })

    console.log("array: ", this.state.todos)
  }

  componentDidUpdate(prevProps, prevState) {

    console.log("updated: ", prevState)

    if (this.state.newTodoAdded) {

      console.log("updated: ", prevState)

      axios.get('http://localhost:9000/api/todos')
        .then(res => {

          this.setState({
            todos: res.data.data
          })

          console.log("result: ", res.data.data)
          console.log("updated todos: ", this.state)

        })
      this.setState({ newTodoAdded: false });
      console.log("updated: ", this.state)
    }

  }

  completeTask = (value) => {

    console.log("selected value: ", value)

    axios.patch(`http://localhost:9000/api/todos/${this.state.todos[value].id}`)
      .then(res => {
        if (res.data) {
          axios.get('http://localhost:9000/api/todos')
            .then(res => {

              this.setState({
                todos: res.data.data
              })

              console.log("result: ", res.data.data)
              console.log("updated todos: ", this.state)

            })
        }
      })
    /*
    this.setState({
      ...this.state, 
      newTodoAdded: true 
    });
    */
    console.log("completed: ", this.state)

  }

  hideCompleted = () => {

    this.setState(prevState => {
      const todos = [...prevState.todos].filter((item) => item.completed === false);
      return { todos }
    })

  }

  handleChange = (e) => {

    this.setState({ todoText: e.target.value })

  }

  submitTodo = (e) => {

    e.preventDefault()

    axios.post('http://localhost:9000/api/todos', {
      name: this.state.todoText,
      completed: false
    })

    this.setState(prevState => ({
      ...this.state,
      todos: [...prevState.todos, { text: prevState.todoText, completed: false }],
      todoText: '',
      newTodoAdded: true
    }))

  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} completeTask={this.completeTask} />
        <Form todoText={this.state.todoText} handleChange={this.handleChange} submitTodo={this.submitTodo} hideCompleted={this.hideCompleted} />
      </div>
    )
  }
}
