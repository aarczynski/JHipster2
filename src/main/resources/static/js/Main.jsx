import React from 'react';
import UserList from './UserList.jsx';
import TextPanel from './TextPanel.jsx';
import { Navbar, Nav, NavItem, Tabs, Tab, Jumbotron } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Main extends React.Component {

    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Demo</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                    </Nav>
                </Navbar>
                <div className="container">
                    <Jumbotron>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Tab 1"><UserList/></Tab>
                            <Tab eventKey={2} title="Tab 2">
                                <TextPanel header="Lorem Ipsum" text="Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis."/>
                            </Tab>
                            <Tab eventKey={3} title="Tab 3">
                                <TextPanel header="Lorem Ipsum" text="Lorem ipsum dolor sit amet, bonorum tractatos quo eu, vel te explicari laboramus conclusionemque, usu in euripidis quaerendum conclusionemque. Eos prima nominavi complectitur ea. Vix tritani laoreet deserunt in, an postea bonorum mnesarchum sit. Aliquid complectitur se"/>
                            </Tab>
                        </Tabs>
                    </Jumbotron></div>
                <ToastContainer />
            </div>
        );
    }
}

export default Main;