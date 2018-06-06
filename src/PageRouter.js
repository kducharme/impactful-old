import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from './pages/dashboard/Dashboard'
import Settings from './pages/settings/Settings'
import ProgramList from './pages/programs/Programs'
import NotFound from './pages/404';

const PageRouter = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/programs' component={ProgramList}></Route>
            <Route path='/settings' component={Settings}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </Router>
)

export default PageRouter;