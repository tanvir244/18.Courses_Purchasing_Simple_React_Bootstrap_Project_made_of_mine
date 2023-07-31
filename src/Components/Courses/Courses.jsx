import React from 'react';
import './Courses.css';
import Button from 'react-bootstrap/Button';

const Courses = (props) => {
        const {name, duration, price, img} = props.course;
    return (
        <div className="col-md-4">
            <img src={img.jpg} alt="" />
            <h5>{name}</h5>
            <p>Duration: {duration}</p>
            <h5>$ {price}</h5>
            <Button 
            onClick={() => props.handleAddCart(props.course)}
            variant="secondary" size="lg"
            >Enroll Now</Button>
        </div>
    );
};

export default Courses;