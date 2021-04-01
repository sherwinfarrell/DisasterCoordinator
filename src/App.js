import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import TaskDetails from "./components/tasks/TaskDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateTask from "./components/tasks/CreateTask";
import MapView from "./components/Mapping/MapView"



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route path='/task/:id' component={TaskDetails}/>
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                        <Route path='/create' component={CreateTask}/>
                        <Route path = '/map' component = {MapView}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
