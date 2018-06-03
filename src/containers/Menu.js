import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Menu extends Component {
    render(){
        return <div>
            Menu
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stream">Stream</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    }
}

export default Menu;