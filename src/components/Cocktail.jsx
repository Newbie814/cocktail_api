import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

// id: idDrink,
//           name: strDrink,
//           image: strDrinkThumb,
//           info: strAlcoholic,
//           glass: strGlass,

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
