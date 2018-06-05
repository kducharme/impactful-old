import React from 'react';
import PrimaryNavigation from '../../global/navigation-primary/PrimaryNavigation';

export default class ProgramsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <PrimaryNavigation />
                <h2>ProgramsList</h2>
            </React.Fragment>
        )
    }
}