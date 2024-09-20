import React from 'react';

const DishCard = ({ title, description, price, imgSrc, imgAlt }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={imgAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <strong>Precio:</strong> {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
