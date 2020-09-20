import React from 'react';
import {Switch} from 'react-router-dom';
import './App.css';

import HomePage from "./pages/homepage/homepage.component";

function App() {
    return (
        <div>
            <Switch>
                <HomePage/>
            </Switch>
        </div>
    );
}

export default App;
