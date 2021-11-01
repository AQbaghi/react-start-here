import logo from './logo.svg';
import { useState, useRef } from 'react'
import './App.css';

const AddOne = function({ start }){
  const [num, setNum] = useState(start)
  const plusOne = function(){
    setNum(num + 1)
  }

  return (
    <>
      <button onClick={plusOne}>+1</button>
      <h1>{num}</h1>
    </>
  )
}

function App() {

  const [todos, setTodos] = useState([])
  let key = null

  const addTodo = e => {
    e.preventDefault()
    //generate a random number for unique key
    key = Math.floor((Math.random() * 1000) + 1)
    
    setTodos([...todos, {
          text: e.target.childNodes[0].value,
          id: key
        }])
  }

  const deleteTodo = e =>{
      const filteredTodos = todos.filter(todo => e.target.id != todo.id )
      console.log(filteredTodos)
      setTodos(filteredTodos)
 }
 

  return (
    <div className="App container">
      
      <AddOne start={6} />


      <h1>To-Do App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Add Todo" />
      </form>
      <div className="to-dos">
        {todos[0]? todos.map(todo=>{
          // add todo
          return <div key={todo.id} id={todo.id} className="to-do" onClick={deleteTodo}>{todo.text}</div>
        }) : ""}
      </div>

    </div>
  );
}

export default App;
