import React from "react";
import PrimaryNavigation from "../../global/navigation-primary/PrimaryNavigation";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <PrimaryNavigation />
        <div className="content content__full">
          <h2>Dashboard</h2>
        </div>
      </React.Fragment>
    );
  }
}
