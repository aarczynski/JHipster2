import React from 'react';
import { connect } from 'react-redux';
import Parent from './Parent';

class WithRedux extends React.Component {

    render() {
        return (
            <div>
                <h2>REDUX</h2>
                <Parent/>
            </div>
        );
    }
}

export default WithRedux;