import React from "react";
import PrimaryNavigation from "../../global/navigation-primary/PrimaryNavigation";
import SecondaryNavigation from "../../global/navigation-secondary/SecondaryNavigation";
import Card from "../../global/components/card/Card";

export default class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: 1,
      projects: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:4000/projects?program=${this.state.program}`)
      .then(r => r.json())
      .then(projects => this.setState({ projects }));
  }

  render() {
    return (
      <div className="programs">
        <PrimaryNavigation />
        <SecondaryNavigation />
        <div className="content content__sub">
          <Card projects={this.state.projects} />
        </div>
      </div>
    );
  }
}
