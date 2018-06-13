import React from "react";
import PrimaryNavigation from "../../global/navigation-primary/PrimaryNavigation";
import SecondaryNavigation from "../../global/navigation-secondary/SecondaryNavigation";
import ProgramCard from "../../global/components/card/ProgramCard";
import Program from "../program/Program";
import { GlobalContext, GlobalProvider } from "../../providers/GlobalProvider";

export default class ProgramList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPrograms: []
    };
  }

  componentWillMount() {
    fetch(`http://localhost:4000/programs?programs=1`)
      .then(r => r.json())
      .then(programs => {
        this.setState({ allPrograms: programs });
      });
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          return (
            <div className="programs">
              <PrimaryNavigation />
              <SecondaryNavigation />
              <div className="content content__sub">
                <ProgramCard
                  cards={this.state.allPrograms}
                  click={e => {
                    value.showNextLayer(e)
                  }}
                  users={value.users}
                  button={"View program"}
                  program={value.programActive}
                />
              </div>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}
