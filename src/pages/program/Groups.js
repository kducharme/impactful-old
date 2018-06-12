import React from "react";
import { ButtonPrimary } from "../../global/components/button/ButtonPrimary";

export default class Groups extends React.Component {
  render() {
    return (
      <div className="groups">
        <div className="groups__header">
          <p>Groups</p>
          <ButtonPrimary
            text={"New group"}
            style="groups__button"
            event={() => { console.log('New group') }}
          />
        </div>
      </div>
    );
  }
}
