import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

const ListItem = ({ todo, toggleCompleted, removeTodo }) => {
  return (
    <li>
      <Checkbox onChange={() => toggleCompleted(todo.id)} checked={todo.completed} />
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      <IconButton onClick={() => removeTodo(todo.id)}>
        <DeleteForeverIcon />
      </IconButton>
    </li>
  )
}

export default ListItem

