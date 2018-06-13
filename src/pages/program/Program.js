import React from "react";
import PrimaryNavigation from "../../global/navigation-primary/PrimaryNavigation";
import SecondaryNavigation from "../../global/navigation-secondary/SecondaryNavigation";
import ProjectCard from "../../global/components/card/ProjectCard";
import Groups from "./Groups";
import { GlobalContext, GlobalProvider } from "../../providers/GlobalProvider";

export default class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: null,
      projects: []
    };
  }

  getProgram = id => {
    this.setState({ program: id });
  };

  componentWillMount() {
    this.state.program;
  }

  componentDidMount() {

  }

  testFunction = () => {
    <GlobalContext.Consumer>
    {value => {
      console.log('woo')
      fetch(`http://localhost:4000/projects?program=1`)
        .then(r => r.json())
        .then(projects => {
          console.log(projects)
          this.setState({ projects });
        });
    }}
</GlobalContext.Consumer>
  }

  render() {
    return (
      <GlobalProvider>
        <GlobalContext.Consumer>
          {value => {
            return (
              <div>
                <PrimaryNavigation />
                <SecondaryNavigation 
                />
                <div className="program">
                  <Groups />
                  <ProjectCard
                    cards={this.state.projects}
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
