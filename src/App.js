import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import DashboardScreen from './screens/DashboardScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={DashboardScreen}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}


export default App;
