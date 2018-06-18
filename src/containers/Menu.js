import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
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
                                <NavLink tag={Link} to="/contact">Contact</NavLink>
                            </NavItem>

                            {/*<UncontrolledDropdown nav inNavbar>*/}
                                {/*<DropdownToggle nav caret>*/}
                                    {/*Options*/}
                                {/*</DropdownToggle>*/}
                                {/*<DropdownMenu right>*/}
                                    {/*<DropdownItem>*/}
                                        {/*Option 1*/}
                                    {/*</DropdownItem>*/}
                                    {/*<DropdownItem>*/}
                                        {/*Option 2*/}
                                    {/*</DropdownItem>*/}
                                    {/*<DropdownItem divider />*/}
                                    {/*<DropdownItem>*/}
                                        {/*Reset*/}
                                    {/*</DropdownItem>*/}
                                {/*</DropdownMenu>*/}
                            {/*</UncontrolledDropdown>*/}

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


// class Menu extends Component {
//     render(){
//         return <div className="menu">
//             {/*Menu*/}
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/stream">Stream</Link></li>
//                     {/*<li className="dropdown">*/}
//                         {/*<a className="dropdown-button">Test</a>*/}
//                         {/*<div className="dropdown-content">*/}
//                             {/*<a><Link to="test1"/></a>*/}
//                             {/*<a><Link to="test2"/></a>*/}
//                         {/*</div>*/}
//                     {/*</li>*/}
//                     <li><Link to="/contact">Contact</Link></li>
//                 </ul>
//             </nav>
//         </div>
//     }
// }

export default Menu;