import React from "react";
import ProgramList from '../pages/programList/ProgramList'

export const GlobalContext = React.createContext();

export class GlobalProvider extends React.Component {
  state = {
    organization: 1,
    organizationUsers: [],

    programs: [],
    programsSelected: [],
    programActive: null,
    programActiveName: null,
    programActiveManager: null,
    programActiveUsers: [],

    projects: [],
    projectsSelected: [],
    projectActive: null,
    projectActiveName: null,
    projectActiveManager: null,
    projectActiveUsers: []
  };

  showNextLayer = e => {
    const program = e.currentTarget.parentNode.parentNode.id;
    this.setState({programActive : program})
  };

  showAllPrograms = (programs) => {
    this.setState({
      programActive: null,
      programACtiveName: null
    });
  };

  loadPrograms = (programs) => {
    this.setState({ programs });
  };

  selectProjects = project => {
    this.setState(prevState => ({
      projectsSelecter: [...prevState.projectsSelecter, project]
    }));
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          organization: this.state.organization,
          organizationUsers: this.state.organizationUsers,

          programs: this.state.programs,
          programsSelected: this.state.programsSelected,
          programActive: this.state.programActive,
          programActiveName: this.state.programActiveName,
          programActiveManager: this.state.programActiveManager,
          programActiveUsers: this.state.programActiveUsers,

          projects: this.state.projects,
          projectsSelected: this.state.projectsSelected,
          projectActive: this.state.projectActive,
          projectActiveName: this.state.projectActiveName,
          projectManager: this.state.projectManager,
          projectUsers: this.state.projectUsers,

          showNextLayer: this.showNextLayer,
          showAllPrograms: this.showAllPrograms,
          loadPrograms: this.loadPrograms
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
