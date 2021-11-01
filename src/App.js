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
  

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, e.target.childNodes[0].value])
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
          return <div key={Math.floor((Math.random() * 100) + 1)} className="to-do"><p>{todo}</p></div>
        }) : ""}
       
      </div>
    </div>
  );
}

export default App;
