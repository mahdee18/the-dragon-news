import React from 'react';
import { Container, Form ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container>
                <Form className='w-25 mx-auto py-4'>
                    <h3>Please Register</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" name='name' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="email" placeholder="Photo URL" name='text' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept terms & conditions" />
                    </Form.Group>
                    <Button className='w-100 mt-2 mb-4' variant="primary" type="submit">
                        Register
                    </Button> <br />
                    <Form.Text className="text-secondary">
                        Already Have An Account? <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;