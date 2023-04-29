import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightNav = () => {
    return (
        <div className='text-center'>
            <h4 className='mb-4'>Login with</h4>
            <Button variant="outline-primary"><FaGoogle /> Login With Google</Button> <br /> <br />
            <Button variant="outline-secondary"> <FaGithub /> Login With GitHub</Button>
            <div className='my-4'>
                <h4 className='my-3'>Find us on with</h4>
                <ListGroup className=''>
                    <ListGroup.Item><FaFacebook className='me-2'/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='me-2'/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='me-2'/>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='py-4'>
                <h4>Q-Zone</h4>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            <div className='py-4 bg-dark text-white px-4' >
                <h3 className='py-3'>Create an Amazing Newspaper</h3>
                <p className='py-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='btn btn-danger'>Learn More</button>
            </div>
        </div>
    );
};

export default RightNav;