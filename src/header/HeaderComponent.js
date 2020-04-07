import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';

const HeaderComponent = () =>{
    return(
       <AppBar position='relative' classes ={{root:'custom-class'}}>
            <div className="header-content">
                <div>
                    <Typography variant="h3">ToDo App</Typography>
                    <Typography variant="h5" align="right">by Vlad</Typography>
                </div>
                <div>
                    <Avatar variant="rounded" src="/img/duck.jpg"/>
                </div>
            </div>
       </AppBar> 
    );
};

export default HeaderComponent;