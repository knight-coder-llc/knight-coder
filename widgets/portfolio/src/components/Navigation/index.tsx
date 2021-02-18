import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'; 
import { NavigationProps } from './interface';

export class Navigator extends React.Component<NavigationProps, {}> {
    constructor(props: NavigationProps) {
        super(props)
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link className="navbar-brand" to="/">Home</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/features">Skills</Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://knight-coder.com">#Knight Coder</Nav.Link>
                        <Nav.Link href="https://knight-coder.com">#Blogs</Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            <p className="m-0">#testimonials <span>&#128513;</span></p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}