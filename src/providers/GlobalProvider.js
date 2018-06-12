import React from "react";

export const GlobalContext = React.createContext();

export class GlobalProvider extends React.Component {
  state = {
    organization: 1, // TODO => make dynamic based in logged in user
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

  showNextLayer = (e) => {
    const selectedProgram = e.currentTarget.parentNode.parentNode.id;
    console.log(this.state.organization, selectedProgram)
    fetch(
      `http://localhost:4000/programs?organization=${this.state.organization}&id=${selectedProgram}`
    )
      .then(r => r.json())
      .then(program => this.setState({
        programActive: program[0].id,
        programActiveName: program[0].name
      }));
  };

  showAllPrograms = () => {
    this.setState({
      programActive: null,
      programACtiveName: null
    })
  }

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
          showAllPrograms: this.showAllPrograms
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }


}
