import React from "react";
import { ButtonPrimary } from "../button/ButtonPrimary";
import { withRouter } from "react-router-dom";
import { GlobalContext } from "../../../providers/GlobalProvider";

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: null,
      project: null,
      checked: false
    };
  }

  render() {
    return (
          <React.Fragment>
            {this.props.cards.map(card => {
                console.log(this.props)
              return (
                <div
                  className={`card`}
                  key={card.id}
                  id={card.id}
                  onMouseEnter={this.showOverlay}
                  onMouseLeave={this.hideOverlay}
                >
                  <span className="card__hover hide">
                    <span className="select__container">
                      <input type="checkbox" checked={this.state.checked} />
                      <span className="select__checkbox" />
                    </span>
                    <ButtonPrimary
                      text={this.props.button}
                      style="card__hover--button"
                      event={e => {
                        this.props.click(e, card);
                      }}
                    />
                  </span>

                  <div className="card__overview">
                    <h4>{card.name}</h4>
                    <p>{card.description}</p>

                    <div className="card__data">
                      <div className="card__data--block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="icon money"
                            d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                          />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                        <p>${card.budget} total budget</p>
                      </div>
                      <div className="card__data--block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            className="icon check"
                            d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                        <p>35 /45 tasks (90% complete)</p>
                      </div>
                      <div className="card__progress" />
                    </div>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
    );
  }
}
