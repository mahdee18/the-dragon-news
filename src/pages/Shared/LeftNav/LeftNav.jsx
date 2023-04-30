import React, { useEffect, useState } from 'react';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Link } from 'react-router-dom';
import Insights from './Insights';

const LeftNav = () => {
    const[categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.error(error))
    },[])
    return (
       <>
        <div className='text-center'>
            <h4>All Category</h4>
            <div>
                {
                    categories.map(category=><p key={category.id}> <Link className='text-decoration-none text-black' to={`/category/${category.id}`}>{category.name}</Link> </p>)
                }
            </div>
            <Insights></Insights>
        </div>
       </>
    );
};

export default LeftNav;