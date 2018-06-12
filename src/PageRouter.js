import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from './pages/dashboard/Dashboard'
import Settings from './pages/settings/Settings'
import ProgramList from './pages/programList/ProgramList'
import NotFound from './pages/404';
import Program from './pages/program/Program';

export default class PageRouter extends React.Component {


    render() {
        return (
        <Router>
            <Switch>
                <Route exact path='/' component={Dashboard}></Route>
                <Route exact path='/programs' component={ProgramList}></Route>
                <Route path='/programs/:programId' component={Program}></Route>
                <Route path='/indiv' component={Program}></Route>
                <Route path='/settings' component={Settings}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
        )
    }
}