import React from "react";
import PrimaryNavigation from "../../global/navigation-primary/PrimaryNavigation";
import SecondaryNavigation from "../../global/navigation-secondary/SecondaryNavigation";
import Card from "../../global/components/card/Card";

export default class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: 1,
      programs: [],
      projects: [],
      users: [],
      selectedProjects: []
    };
  }

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

  selectProjects = (project) => {
    this.setState(prevState => ({
      selectedProjects: [...prevState.selectedProjects, project]
    }));
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="programs">
        <PrimaryNavigation />
        <SecondaryNavigation />
        <div className="content content__sub">
          <Card cards={this.state.programs} select={this.selectProjects} users={this.state.users} button={'View program'}/>
        </div>
      </div>
    );
  }
}
