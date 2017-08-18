import React from 'react';
import WithRedux from './redux/WithRedux';
import WithoutRedux from './noredux/WithoutRedux';
import '../../css/main.scss';

class Main extends React.Component {

    render() {
        return (
            <div>
                <WithoutRedux/>
                <hr/>
                <WithRedux/>
            </div>
        );
    }
}

export default Main;
