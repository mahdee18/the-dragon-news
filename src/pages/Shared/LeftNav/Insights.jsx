import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import firstBg from '../../../assets/1.png'
import secondBg from '../../../assets/2.png'
import thirdBg from '../../../assets/3.png'
import { FaCalendar } from 'react-icons/fa';
const Insights = () => {
    return (
        <div>
            <Row xs={1} md={1} lg={1} className="g-4">
                <Col>
                    <Card className='mt-4'>
                        <Card.Img variant="top" src={firstBg} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                <FaCalendar></FaCalendar> Jan 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='mt-4'>
                        <Card.Img variant="top" src={secondBg} />
                        <Card.Body>
                            <Card.Title>The Most Stylish Guest Dresses For Men and Women</Card.Title>
                            <Card.Text>
                                <FaCalendar></FaCalendar> Mar 4, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='mt-4'>
                        <Card.Img variant="top" src={thirdBg} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                <FaCalendar></FaCalendar> Feb 28, 2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Insights;