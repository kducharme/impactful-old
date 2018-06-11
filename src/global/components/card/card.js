import React from 'react';
import { ButtonPrimary } from '../button/ButtonPrimary';


export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: null,
      project: null
    };
  }

  showOverlay = (e) => {
    const overlay = e.currentTarget.children[0]
    overlay.classList.remove('hide');
  }
  
  hideOverlay = (e) => {
    const overlay = e.currentTarget.children[0]
    overlay.classList.add('hide');
  }


  render() {
    return (
      <React.Fragment>
        {this.props.cards.map(card => {
          return (
            <div className='card' key={card.id} onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay}>
              <span className='card__hover hide'>
                <input type='checkbox' id={card.name}></input>
                <ButtonPrimary text='View project' style='card__hover--button' onClick={null} />
              </span>

              <div className='card__content'>
                <h4 className='card__title'>{card.name}</h4>
                <h4 className='card__description'>{card.description}</h4>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
