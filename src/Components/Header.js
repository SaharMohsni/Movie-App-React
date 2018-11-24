import React from 'react'
import { Navbar} from 'react-bootstrap';

const Header = () =>
    <Navbar className="navbar">
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">Movies Store</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>;


export default Header