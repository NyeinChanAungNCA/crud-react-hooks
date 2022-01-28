import React, { useState, Fragment } from 'react'
import { Container, Grid, Icon, MenuItem, Menu, Snackbar, Alert, Stack, Box, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
  // Data
  const usersData = [
    { id: 1, name: 'John Doe', age: '20', gender: 'Male' },
    { id: 2, name: 'Jackie', age: '21', gender: 'Male' },
    { id: 3, name: 'Sally', age: '24', gender: 'Female' },
  ]

  const initialFormState = { id: null, name: '', age: '', gender: '' }

  // Setting state
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, age: user.age, gender: user.gender })
  }

  return (
    <Container>
      <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }} gutterBottom>CRUD Demo</Typography>
      <Grid container>
        <Grid item xs={12}>
          {editing ? (
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          ) : (
            <AddUserForm addUser={addUser} />
          )}
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Typography variant='h5'>View users</Typography>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App