import React, {useState} from 'react';
import AddNew from '../components/AddNew';
import ListItem from '../components/ListItem';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';

export const Dashboard = () => {
  const [todos, setTodos] = useState([])

  const addNewTodo = (newTodoToAdd) => {
    if (!newTodoToAdd) return;
    const newTodoObj = {id: uuidv4(), text: newTodoToAdd, completed: false}
    setTodos([...todos, newTodoObj])
  }

  const toggleCompleted = (id) => {
    const updatedTasks = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTasks);
  }

  const removeTodo = (id) => {
    const updatedTasks = todos.filter(todo => todo.id !== id)
    setTodos(updatedTasks);
  }

  const clearTodos = () => {
    setTodos([]);
  }

  return (
    <div className="dashboard">
      <AddNew addNewTodo={addNewTodo} />
      <div>
      <ul>
        {todos.map(todo => (
          <ListItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
        ))}
      </ul>
      {todos.length > 0 && <Button variant="contained" onClick={clearTodos}>Clear</Button>}
      </div>
    </div>
  );
}

export default Dashboard;
