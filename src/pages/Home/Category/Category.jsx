import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id}= useParams()
    const categoriesItem = useLoaderData()
    return (
        <div>
            {   id &&
                <h2>This is category : {categoriesItem.length}!</h2>
            }

            {
                categoriesItem.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;