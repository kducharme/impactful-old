// TODO => HOOK UP CHECK MARKS TO SEND TO STATE AT PROGRAM LEVEL

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

  componentDidMount() {
  }

  showOverlay = e => {
    const overlay = e.currentTarget.children[0];
    overlay.classList.remove("hide");
  };

  hideOverlay = e => {
    const overlay = e.currentTarget.children[0];
    overlay.classList.add("hide");
  };

  selectCard(e, card) {
    this.setState({checked: !this.state.checked});
    if (e.currentTarget.checked) {
      e.target.parentElement.classList.toggle("card__selected");
    }
    if (!e.currentTarget.checked) {
      e.target.parentElement.classList.toggle("card__selected");
    }
  }

  CardUsers() {
    console.log('users')
  }

  // http://localhost:4000/programs?programs=${this.state.organization}`

  render() {
    fetch(`http://localhost:4000/project_users?project=${this.props.card.id}?_expand=users`)
    .then(r => r.json())
    .then(users => console.log(users));

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
                <span className="select__container" onClick={(e) => this.selectCard(e, card)}>
                  <input
                    type="checkbox"
                    // onChange={() => this.props.select(card.id)}
                    checked={this.state.checked}
                  />
                  <span className='select__checkbox'/>
                </span>
                <ButtonPrimary text="View project" style="card__hover--button" onClick={null} />
              </span>

              <div className="card__content">
                <h4 className="card__title">{card.name}</h4>
                <h4 className="card__description">{card.description}</h4>
                }}
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
