import React from 'react';
import Grid from '@material-ui/core/Grid';
import TodoComponent from './TodoComponent';
const TodoListComponent = (props) => {
    const {todos,updateTodo} = props;
    return (
        <Grid item xs={12} >
            {todos.map((item, index) => (
                <TodoComponent  status={item.status}
                                title={item.title}
                                key={index}
                                updateTodo={updateTodo}
                                id={item.id}
                />
            ))}
        </Grid>
    );
};
export default TodoListComponent;