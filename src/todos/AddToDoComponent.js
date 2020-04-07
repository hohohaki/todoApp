import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddToDoComponent =()=>{
    return(
        <div className="AddToDoContainer">
            <TextField variant="outlined" className="AddToDoInput" />
            <Button className="addToDo-button" variant="outlined" color="secondary">Add</Button>
        </div>
    );
}

export default AddToDoComponent;
