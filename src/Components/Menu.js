import React from 'react';
import DishCard from './DishCard'; // Asegúrate de que la ruta sea correcta

const Menu = () => {
  const dishes = [
    {
      title: 'Paella',
      description: 'Deliciosa paella de mariscos con ingredientes frescos.',
      price: '$25.00',
      imgSrc: 'https://www.lafallera.es/wp-content/uploads/2023/11/Valor-nutricional-paella-mariscos--1080x675.jpeg',
      imgAlt: 'Paella',
    },
    {
      title: 'Filete Mignon',
      description: 'Filete mignon a la parrilla con salsa especial.',
      price: '$35.00',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaZJXyjRu2VtajXhWF0c4w9AMO7whcoOUBw&s',
      imgAlt: 'Filete Mignon',
    },
    {
      title: 'Tarta de Chocolate',
      description: 'Deliciosa tarta de chocolate con un toque de menta.',
      price: '$8.00',
      imgSrc: 'https://okdiario.com/img/2018/01/26/tarta-chocolate.jpg',
      imgAlt: 'Tarta de Chocolate',
    },
    {
      title: 'Ensalada Caesar',
      description: 'Ensalada Caesar con pollo a la parrilla y aderezo casero.',
      price: '$12.00',
      imgSrc: 'https://www.comedera.com/wp-content/uploads/2023/10/shutterstock_1087243763.jpg',
      imgAlt: 'Ensalada Caesar',
    },
    {
      title: 'Dumplings',
      description: 'Dumplings rellenos de cerdo y verduras, cocidos al vapor.',
      price: '$15.00',
      imgSrc: 'https://images.squarespace-cdn.com/content/v1/55be995de4b071c106b3b4c0/6af0cbeb-8a58-4993-ab68-8e9919d6d04c/Salmon+Dumplings-6.jpg',
      imgAlt: 'Dumplings',
    },
    {
      title: 'Pizza Margarita',
      description: 'Pizza clásica con tomate, mozzarella y albahaca fresca.',
      price: '$14.00',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZAhSW7BqNzZ77sYcDQ8t5bheaRQARs9XRw&s',
      imgAlt: 'Pizza Margarita',
    },
    // Agrega más platos aquí según tu lista original
  ];

  return (
    <section className="container my-5" id="menu">
      <h2 className="text-center">Nuestro Menú</h2>
      <div className="row">
        {dishes.map((dish, index) => (
          <DishCard
            key={index}
            title={dish.title}
            description={dish.description}
            price={dish.price}
            imgSrc={dish.imgSrc}
            imgAlt={dish.imgAlt}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
