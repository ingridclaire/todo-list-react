import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddNew = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={newTodo} onChange={(e) => setNewTodo(e.target.value)} sx={{height: '50px'}} id="outlined-basic" label="Outlined" variant="outlined" />
      <Button sx={{height: '50px', width: '25px'}} variant="outlined">Add</Button>
    </Box>
  )
}

export default AddNew