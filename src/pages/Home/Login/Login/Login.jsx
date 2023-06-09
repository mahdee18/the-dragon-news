import React, { useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from,{replace: true})
            })
            .catch(error => {
                console.error(error.message)
            })

    }
    return (
        <Container>
            <Form className='w-25 mx-auto py-4' onSubmit={handleLogin}>
                <h3>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100 mt-2 mb-4' variant="primary" type="submit">
                    Login
                </Button> <br />
                <Form.Text className="text-secondary">
                    Don't Have An Account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;