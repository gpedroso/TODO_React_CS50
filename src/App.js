import React from "react";
import "./styles.css";

let id = 0;

const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todoprops.checked} onClick={props.onToggle}/>
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
      ...this.state.todos, {id: id++, text: text, checked: false},
    ],
  })

}

removeTodo(id) {
  this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
}

toggleTodo(id){
  this.setState({
    todos: this.state.todos.map(todo => {
      if (todo.id !== id) return todo
      return {
        id: todo.id,
        text: todo.text,
        checked: !todo.checked,
      }
    })
  })
}

changeAll(){
this.setState({
  todos: this.state.todos.map(todo => {
    return {  id: todo.id,
              text: todo.text,
              checked: !todo.checked,
            }
    })
})
}

render() {
    return(
      <div>
        <div>TODO count: {this.state.todos.length} </div>
        <div>TODO count unchecked: {this.state.todos.filter(todo => !todo.checked).length} </div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <br/><input type="checkbox" id="changeAll" onClick={() => this.changeAll()} />Change all
        <ul>
          {this.state.todos.map(todomap => (
            <Todo 
              onToggle={() => this.toggleTodo(todomap.id)}
              onDelete={() => this.removeTodo(todomap.id)}
              todoprops={todomap}
            />))
          }
        </ul>
      </div>
    )
  }


}
