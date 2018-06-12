import React from "react";
import PrimaryNavigation from "../../global/navigation-primary/PrimaryNavigation";
import SecondaryNavigation from "../../global/navigation-secondary/SecondaryNavigation";
import Card from "../../global/components/card/Card";
import { GlobalContext, GlobalProvider } from "../../providers/GlobalProvider";

export default class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: 1,
      programs: [],
      projects: [],
      activeProgram: null,
      users: [],
      selectedProjects: []
    };
  }

  selectProjects = project => {
    this.setState(prevState => ({
      selectedProjects: [...prevState.selectedProjects, project]
    }));
  };

  showProjects = e => {
    const program = e.currentTarget.parentNode.parentNode.id;
    this.setState({
      activeProgram: program,
      programs: null
    });
    console.log(this.state.activeProgram);
  };

  render() {
    return (
      <GlobalProvider>
        <GlobalContext.Consumer>
          {value => {
            return (
              <div className="programs">
                <PrimaryNavigation />
                <SecondaryNavigation />
                <div className="content content__sub">
                  <Card
                    cards={value.programs}
                    click={e => this.showProjects(e)}
                    users={value.users}
                    button={"View program"}
                  />
                </div>
              </div>
            );
          }}
        </GlobalContext.Consumer>
      </GlobalProvider>
    );
  }
}
