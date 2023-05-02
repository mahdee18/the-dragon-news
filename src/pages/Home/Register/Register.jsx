import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted,setAccepted]=useState()
    const handleRegister = event=>{
        event.preventDefault()
        const form = event.target;
        const name= form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password)
        createUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error=>{
            console.error(error.message)
        })

    }
    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }
    return (
        <div>
            <Container>
                <Form className='w-25 mx-auto py-4' onSubmit={ handleRegister }>
                    <h3>Please Register</h3>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" name='name' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" placeholder="Photo URL" name='photo' required />
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
                        <Form.Check type="checkbox" onClick={handleAccepted} label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
                    </Form.Group>
                    <Button className='w-100 mt-2 mb-4' variant="primary" disabled={!accepted} type="submit">
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