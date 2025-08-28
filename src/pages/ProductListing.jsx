import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Header from '../components/Header';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 25, img: '/assets/images/plant1.jpg' },
  { id: 2, name: 'Snake Plant', category: 'Indoor', price: 15, img: '/assets/images/plant2.jpg' },
  { id: 3, name: 'Aloe Vera', category: 'Indoor', price: 10, img: '/assets/images/plant3.jpg' },
  { id: 4, name: 'Rose', category: 'Outdoor', price: 20, img: '/assets/images/plant4.jpg' },
  { id: 5, name: 'Tulip', category: 'Outdoor', price: 18, img: '/assets/images/plant5.jpg' },
  { id: 6, name: 'Bamboo Palm', category: 'Indoor', price: 30, img: '/assets/images/plant6.jpg' },
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = plant => {
    dispatch(addToCart(plant));
  };

  const isInCart = id => cartItems.find(item => item.id === id);

  return (
    <>
      <Header />
      <div className="products">
        {plants.map(plant => (
          <div key={plant.id} className="plant-card">
            <img src={plant.img} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button
              onClick={() => handleAddToCart(plant)}
              disabled={isInCart(plant.id)}
            >
              {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListing;
