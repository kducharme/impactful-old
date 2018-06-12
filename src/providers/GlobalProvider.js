import React from "react";

export const GlobalContext = React.createContext();

export class GlobalProvider extends React.Component {
  state = {
    organization: 1, // TODO => make dynamic based in logged in user
    organizationUsers: [],

    programs: [],
    programsSelected: [],
    programActive: null,
    programActiveManager: null,
    programActiveUsers: [],

    projects: [],
    projectsSelected: [],
    projectActive: null,
    projectActiveManager: null,
    projectActiveUsers: []
  };

  componentDidMount() {
    // Gets the organization's programs
    fetch(`http://localhost:4000/programs?programs=${this.state.organization}`)
      .then(r => r.json())
      .then(programs => this.setState({ programs }));

    // Gets the organization's users
    fetch(`http://localhost:4000/users?orgranization=${this.state.organization}`)
    .then(r => r.json())
    .then(users => this.setState({ users }));
  }

  showProjects = (e) => {
    const program = e.currentTarget.parentNode.parentNode.id;
    this.setState({
      activeProgram: program,
      programs: null
    });
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
          programActiveManager: this.state.programActiveManager,
          programActiveUsers: this.state.programActiveUsers,

          projects: this.state.projects,
          projectsSelected: this.state.projectsSelected,
          projectActive: this.state.projectActive,
          projectManager: this.state.projectManager,
          projectUsers: this.state.projectUsers,

          showProjects: this.showProjects
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }


}
