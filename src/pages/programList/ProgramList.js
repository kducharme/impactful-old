import React from 'react';
import PrimaryNavigation from '../../global/navigation-primary/PrimaryNavigation';
import SecondaryNavigation from '../../global/navigation-secondary/SecondaryNavigation';
import ProgramCard from '../../global/components/card/ProgramCard';
import ProjectCard from '../../global/components/card/ProjectCard';
import { GlobalContext, GlobalProvider } from '../../providers/GlobalProvider';

export default class ProgramList extends React.Component {

  render() {
    return (
      <GlobalProvider>
        <GlobalContext.Consumer>
          {value => {
            return (
              <div className='programs'>
                <PrimaryNavigation />
                <SecondaryNavigation />
                <div className='content content__sub'>
                  <ProgramCard
                    cards={value.programs}
                    click={e => value.showNextLayer(e)}
                    users={value.users}
                    button={'View program'}
                    program={value.programActive}
                    />
                <ProjectCard 
                  cards={value.projects}
                  click={() => console.log('proj click')}
                  button={'View project'}
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