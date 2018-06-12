import React from "react";
import PrimaryNavigation from "../../global/navigation-primary/PrimaryNavigation";
import SecondaryNavigation from "../../global/navigation-secondary/SecondaryNavigation";
import ProgramCard from "../../global/components/card/ProgramCard";
import { GlobalContext, GlobalProvider } from "../../providers/GlobalProvider";

export default class Programs extends React.Component {

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
                  <ProgramCard
                    cards={value.programs}
                    click={e => value.showNextLayer(e)}
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
