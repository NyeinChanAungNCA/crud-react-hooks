import React, { useState, useEffect } from 'react'
import { FormControl, FormLabel, Icon, RadioGroup, FormControlLabel, Radio, Typography, TextField, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const onUpdate = (event) => {
        event.preventDefault()
        setLoading(true)
        props.updateUser(user.id, user)
        setLoading(false)
    }

    return (
        <>
            <Typography variant='h5'>Edit User</Typography>
            <form onSubmit={onUpdate}>
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
                    startIcon={<Icon>edit</Icon>}
                    loading={loading}
                    loadingPosition="start">Update</LoadingButton>
                <Button variant='outlined' onClick={() => props.setEditing(false)} sx={{ ml: 2 }}>Cancel</Button>
            </form>
        </>
    )
}

export default EditUserForm