import React, { useEffect, useState } from 'react';
import NavLink from 'react-bootstrap/esm/NavLink';

const LeftNav = () => {
    const[categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div className='text-center'>
            <h4>All Category</h4>
            <div>
                {
                    categories.map(category=><p key={category.id}> <NavLink to={`/category/${category.id}`}>{category.name}</NavLink> </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;