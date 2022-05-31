
import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import AddNew from './components/AddNew';

function App() {
  const [todos, setTodos] = useState([])

  const addNewTodo = (newTodoToAdd) => {
    setTodos([...todos, newTodoToAdd])
  }

  return (
    <div className="App">
      <Header />
      <AddNew addNewTodo={addNewTodo} />
    </div>
  );
}

export default App;
