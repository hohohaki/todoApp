import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import  DeleteIcon from '@material-ui/icons/DeleteRounded';
import IconButton from '@material-ui/core/IconButton';
class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }
    onChangeCheckbox(e) {
        this.props.updateTodo({
            id: this.props.id,
            status: e.target.checked
        });
    }
    onClickDelete(e){
        console.log('not finished');
        this.setState({
            
        });
    }
    render() {
        return (
            <div className="toDoComponent">
                <div className="checkboxText">
                    <Checkbox checked={this.props.status}
                            onChange={this.onChangeCheckbox}
                    />
                    {this.props.title}
                </div>
                <div className="deleteButton">
                    <IconButton onClick={this.onClickDelete}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </div>
        );
    }
}
export default TodoComponent;