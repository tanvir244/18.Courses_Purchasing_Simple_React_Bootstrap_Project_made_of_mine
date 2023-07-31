import React, { useState } from 'react';
import Data from '../../Data/Data'
import './Shop.css'
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';

const Shop = () => {
    const coursesData = Data;
    const [courses, setCourses] = useState(coursesData);
    const [cart, setCart] = useState([]);

    const handleAddCart = (courses) => {
        const newCart = [...cart, courses];
        setCart(newCart);
    }

    return (
        <div className='main-div'>
            <div className="col-md-9">
                {
                    courses.map(course => <Courses course={course} handleAddCart={handleAddCart}></Courses>)
                }
            </div>
            <div className="col-md-2">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;