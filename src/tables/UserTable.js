import React from 'react'
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Icon, IconButton } from '@mui/material';

const UserTable = props => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>{user.gender}</TableCell>
                            <TableCell>
                                <IconButton
                                    color='success'
                                    onClick={() => {
                                        props.editRow(user)
                                    }}>
                                    <Icon>edit</Icon>
                                </IconButton>
                                <IconButton
                                    color='error'
                                    sx={{ ml: 2 }}
                                    onClick={() => props.deleteUser(user.id)}>
                                    <Icon>delete</Icon>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell align='center' colSpan={5}>No users</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </TableContainer>
)

export default UserTable