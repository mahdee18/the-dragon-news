import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms And Conditions!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vero voluptas delectus voluptates dolorem itaque. Sint incidunt sapiente ex voluptatibus asperiores neque, nesciunt veniam sunt nam fuga nostrum harum a, rerum sed voluptate fugiat deleniti, officia aperiam iure. Dignissimos repellat repudiandae iusto animi suscipit sint laborum similique enim molestiae quam?</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;