import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class AddToDoComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClickAddToDo = this.onClickAddToDo.bind(this);
    }
    
    onChangeInput(e){
        this.setState({
            inputValue: e.target.value
        });
    }
    onClickAddToDo(){
        const newTodo = {
            status:false,
            title: this.state.inputValue
        }
        this.props.addTodo(newTodo);
        
        this.state.inputValue = ' ';
    }
    render(){
        return(
            <Grid   container 
                    item xs={12} 
                    spacing={3}
            
            >
                <Grid item xs={8}>
                    <TextField  label="What are your plans?" 
                                variant="outlined"
                                fullWidth
                                value={this.state.inputValue}
                                onChange={this.onChangeInput}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                            color="secondary"
                            classes={{root:'addButton'}}
                            onClick={this.onClickAddToDo}
                    >
                        Add to the list
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default AddToDoComponent;
