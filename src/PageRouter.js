import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/settings/Settings";
import ProgramList from "./pages/programList/ProgramList";
import NotFound from "./pages/404";
import Program from "./pages/program/Program";
import { GlobalProvider } from "./providers/GlobalProvider";

export default class PageRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <GlobalProvider>
            <Route exact path="/" component={Dashboard} />
            <Route path="/programs" component={ProgramList} />
            <Route exact path="/programs/:programId" component={Program} />
            <Route path="/indiv" component={Program} />
            <Route path="/settings" component={Settings} />
            <Route component={NotFound} />
          </GlobalProvider>
        </Switch>
      </Router>
    );
  }
}
