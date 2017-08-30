import React from 'react';
import { Tabs, Tab, Jumbotron } from 'react-bootstrap';
import UserList from '../user/UserList';
import TextPanel from '../util/TextPanel';

class Home extends React.Component {

    render() {
        return (
            <Jumbotron>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Tab 1"><UserList/></Tab>
                    <Tab eventKey={2} title="Tab 2">
                        <TextPanel header="Lorem Ipsum">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio. Non arcu risus
                            quis varius. Tortor vitae purus faucibus ornare. Magna eget est lorem ipsum dolor sit amet.
                            Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Est pellentesque elit
                            ullamcorper dignissim. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
                            Lacus laoreet non curabitur gravida. Pellentesque eu tincidunt tortor aliquam nulla facilisi
                            cras fermentum odio. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Lobortis
                            scelerisque fermentum dui faucibus in ornare quam viverra orci. Proin nibh nisl condimentum
                            id venenatis. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Et malesuada
                            fames ac turpis egestas sed. Morbi tristique senectus et netus et malesuada fames.
                        </TextPanel>
                    </Tab>
                    <Tab eventKey={3} title="Tab 3">
                        <TextPanel header="Lorem Ipsum">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </TextPanel>
                    </Tab>
                </Tabs>
            </Jumbotron>
        );
    }
}

export default Home;