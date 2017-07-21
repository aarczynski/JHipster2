import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import 'react-toastify/dist/ReactToastify.min.css';
import '../css/main.scss';

class Main extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar inverse>
                        <Navbar.Header>
                            <Navbar.Brand>Demo App</Navbar.Brand>
                        </Navbar.Header>
                        <ul className="nav navbar-nav">
                            <li role="presentation"><Link to="/">Home</Link></li>
                            <li role="presentation"><Link to="/about">About</Link></li>
                        </ul>
                    </Navbar>
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/about' component={About}/>
                        </Switch>
                    </div>
                    <ToastContainer />
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;