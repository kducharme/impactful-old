import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: null,
      project: null
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.props.projects.map(proj => {
          return (
          <div className='card' key={proj.id}>
            <h4 className='card__title'>{proj.name}</h4>
            <h4 className='card__description'>{proj.description}</h4>
          </div>
          )
        })}
      </React.Fragment>
    );
  }
}
