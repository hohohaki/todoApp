import React from 'react';
import  AddToDoComponent from './AddToDoComponent'
import TodoListComponent from './TodoListComponent'
import Grid from '@material-ui/core/Grid'
class ToDoContentComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        };
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    addTodo(newTodo){
        this.setState({
            todos:[].concat(this.state.todos,newTodo,
                {
                    ...newTodo,
                    id: this.state.todos.length
                })
        });
    }

    updateTodo(updatedTodo){
        this.setState({
            todos: this.state.todos.map((item)=>{
                if(item.id === updatedTodo.id){
                    return{
                        ...item,
                        ...updatedTodo
                    };
                }
                return item;
            })
        });
    }

    render(){
        return(
            console.log(this.state.todos),
            <div className="todo-content">
                <Grid>  
                    <AddToDoComponent addTodo={this.addTodo} />
                    <TodoListComponent  todos={this.state.todos}
                                        updateTodo={this.updateTodo}
                    />
                </Grid>
            </div>
        );
    }
}

export default ToDoContentComponent;