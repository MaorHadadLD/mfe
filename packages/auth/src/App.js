import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/SignIn';
import Signup from './components/SignUp';

// Generate a unique class name for each component to avoid conflicts
const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
            <Switch>
                <Route path="/auth/signin" component={Signin} />
                <Route path="/auth/signup" component={Signup} />
            </Switch>
            </Router>
        </StylesProvider>
    </div>
};

