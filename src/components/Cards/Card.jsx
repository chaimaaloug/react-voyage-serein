import React from 'react';
import style from './Card.module.scss';

const CardList = ({ data }) => {
  return (
    <div className={style.cardList}>
      {data.map((item, index) => (
        <Card key={index} title={item.title} image={item.image} />
      ))}
    </div>
  );
};

const Card = ({ title, image }) => {
  return (
    <div>
      <div className={style.card}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default CardList;
