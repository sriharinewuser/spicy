import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Thumbnails.module.css'; // Assuming you have a CSS module

export default function Thumbnails({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map(food => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img 
              className={classes.image}
              src={`/foods/${food.imageUrl}`}
              alt={food.name} 
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}