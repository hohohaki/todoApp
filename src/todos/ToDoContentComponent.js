import React from 'react';
import AddToDoComponent from './AddToDoComponent';

class ToDoContentComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="todo-content">
                <AddToDoComponent/>
            </div>
        );
    }
}

export default ToDoContentComponent;