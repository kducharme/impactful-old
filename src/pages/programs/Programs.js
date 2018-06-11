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
      projects: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:4000/programs?programs=${this.state.organization}`)
      .then(r => r.json())
      .then(programs => this.setState({ programs }));
  }

  render() {
    return (
      <div className="programs">
        <PrimaryNavigation />
        <SecondaryNavigation />
        <div className="content content__sub">
          <Card cards={this.state.programs} />
        </div>
      </div>
    );
  }
}
