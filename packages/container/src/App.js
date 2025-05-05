import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import MarketingApp from '../components/MarketingApp';
import Header from '../components/Header';

// Generate a unique class name for each component to avoid conflicts
const generateClassName = createGenerateClassName({
    productionPrefix: 'con',
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};