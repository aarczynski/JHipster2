import React from 'react';
import Parent from './Parent';

class WithoutRedux extends React.Component {

    render() {
        return (
            <div>
                <h2>NO REDUX</h2>
                <Parent/>
            </div>
        );
    }
}

export default WithoutRedux;