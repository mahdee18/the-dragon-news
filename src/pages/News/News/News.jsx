import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditorsInsights from '../EditorsInsights/EditorsInsights';
const News = () => {
    const news = useLoaderData()
    const { title, details, image_url, category_id } = news
    console.log(news)
    // console.log('hello')
    // const {id}= useParams()
    // console.log(id)
    // useEffect(()=>{
    //     fetch(`http://localhost:3000/news/${id}`)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger">Go somewhere</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsights></EditorsInsights>

        </div>
    );
};

export default News;