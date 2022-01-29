import React, { useContext, useState } from 'react'
import { FormControl, FormLabel, Icon, RadioGroup, FormControlLabel, Radio, Typography, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import context from '../services/context';

const AddUserForm = props => {
    const initialFormState = { id: null, name: '', age: '', gender: '' }
    const [user, setUser] = useState(initialFormState)
    const [loading, setLoading] = useState(false)
    const onShowSnack = useContext(context)

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    return (
        <>
            <Typography variant='h5'>Add User</Typography>
            <form
                onSubmit={event => {
                    event.preventDefault()
                    if (!user.name || !user.age) return
                    setLoading(true)
                    props.addUser(user)
                    setUser(initialFormState)
                    onShowSnack("Successfully created", 'success')
                    setLoading(false)
                }}
                autoComplete='off'
            >
                <TextField label="Name" value={user?.name} name='name' fullWidth margin='normal' onChange={handleInputChange} />
                <TextField label="Age" type='number' value={user?.age} name='age' fullWidth margin='normal' onChange={handleInputChange} />
                <FormControl fullWidth>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={user.gender}
                        name="gender"
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    </RadioGroup>
                </FormControl>
                <LoadingButton type='submit' variant='contained'
                    startIcon={<Icon>add</Icon>}
                    loading={loading}
                    loadingPosition="start">Add</LoadingButton>
            </form>
        </>
    )
}

export default AddUserForm