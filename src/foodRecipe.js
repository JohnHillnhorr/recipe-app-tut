import React from 'react';
import style from './food.css';

const Recipe = ({title, mealType, img, ingredients}) => {
    return (
    <div style={style.food} >
         <h1>{title}</h1> 
         <p>{mealType}</p>
         <ul>{ingredients.map(ingredient => {
             return (
                 <li>{ingredient.text}</li>
             )
         })}</ul>
         <img src={img} alt="food_photo" />

    </div>
    )
}

export default Recipe;