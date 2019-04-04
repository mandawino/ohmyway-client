import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Menu extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">OhMyWay</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/thailande">Thaïlande</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/myanmar">Myanmar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/cambodge">Cambodge</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/laos">Laos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/vietnam">Vietnam</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/philippines">Philippines</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/malaisie">Malaisie</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;