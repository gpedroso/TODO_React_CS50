import React from "react";
import "./styles.css";

let id = 0;

const Todo = props => (
  <li>
    <input type="checkbox" />
    <span>{props.todoprops.text}</span>
    <button onClick={props.onDelete}>Delete</button>
  </li>
)

export default class App extends React.Component {
  constructor () {
    super()
      this.state = {
      todos: [],
      }
  }
  
addTodo() {
  const text = prompt('TODO text please:')

  this.setState({
    todos: [
      ...this.state.todos, {id: id++, text: text},
    ],
  })

}

removeTodo(id) {
  this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
}

  render() {
    return(
      <div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todomap => (
            <Todo 
              onDelete={() => this.removeTodo(todomap.id)}
              todoprops={todomap}
            />))
          }
        </ul>
      </div>
    )
  }


}
