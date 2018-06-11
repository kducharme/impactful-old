import React from "react";
import { ButtonPrimary } from "../button/ButtonPrimary";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: null,
      project: null,
      checked: false
    };
  }

  showOverlay = e => {
    const overlay = e.currentTarget.children[0];
    overlay.classList.remove("hide");
  };

  hideOverlay = e => {
    const overlay = e.currentTarget.children[0];
    overlay.classList.add("hide");
  };
  
  toggleCheck() {
    this.setState({checked: !this.state.checked});
  };

  render() {
    console.log(this.state.checked)
    return (
      <React.Fragment>
        {this.props.cards.map(card => {
          return (
            <div
              className="card"
              key={card.id}
              onMouseEnter={this.showOverlay}
              onMouseLeave={this.hideOverlay}
            >
              <span className="card__hover hide">
                <span className="select__container" onClick={this.toggleCheck.bind(this)}>
                  <input
                    type="checkbox"
                    // onChange={() => this.props.select(card.id)}
                    checked={this.state.checked}
                  />
                  <span />
                </span>
                <ButtonPrimary
                  text="View project"
                  style="card__hover--button"
                  onClick={null}
                />
              </span>

              <div className="card__content">
                <h4 className="card__title">{card.name}</h4>
                <h4 className="card__description">{card.description}</h4>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
