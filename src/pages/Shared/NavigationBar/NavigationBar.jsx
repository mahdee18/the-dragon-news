import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar className='my-4' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/career">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user &&
                                <Nav.Link href="#deets"><FaUserCircle></FaUserCircle></Nav.Link>
                            }
                            {
                                user ?
                                    <button
                                        onClick={handleLogOut}
                                        variant='secondary'>Logout</button> :

                                    <Link to='/login'>
                                        <button variant='secondary'>Login</button>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;