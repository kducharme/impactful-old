import React from "react";
import PrimaryNavigation from "../../global/navigation-primary/PrimaryNavigation";
import SecondaryNavigation from "../../global/navigation-secondary/SecondaryNavigation";
import ProjectCard from "../../global/components/card/ProjectCard";
import Groups from "./Groups";
import { GlobalContext, GlobalProvider } from "../../providers/GlobalProvider";

export default class Program extends React.Component {
  componentDidMount() {
    console.log('program')
  }

  render() {
    return (
      <GlobalProvider>
        <GlobalContext.Consumer>
          {value => {
            return (
              <div>
                <PrimaryNavigation />
                <SecondaryNavigation />
                <div className="program">
                  <Groups />
                  <ProjectCard
                    cards={value.projects}
                    click={() => console.log("proj click")}
                    button={"View project"}
                    program={value.programActive}
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
