import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';



// Generate a unique class name for each component to avoid conflicts
const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
            <Switch>
                
            </Switch>
            </Router>
        </StylesProvider>
    </div>
};

