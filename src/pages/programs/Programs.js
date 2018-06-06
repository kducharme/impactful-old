import React from "react";
import PrimaryNavigation from "../../global/navigation-primary/PrimaryNavigation";
import SecondaryNavigation from "../../global/navigation-secondary/SecondaryNavigation";

export default class Programs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="programs">
        <PrimaryNavigation />
        <SecondaryNavigation />
        <div className="content content__sub">
        </div>
      </div>
    );
  }
}
