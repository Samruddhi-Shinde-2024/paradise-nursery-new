import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Header from '../components/Header';
import plant1 from '../assets/images/plant1.webp';
import plant2 from '../assets/images/plant2.jpg';
import plant3 from '../assets/images/plant3.jpg';
import plant4 from '../assets/images/plant4.webp';
import plant5 from '../assets/images/plant5.jpg';
import plant6 from '../assets/images/plant6.webp';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 25, img: plant1 },
  { id: 2, name: 'Snake Plant', category: 'Indoor', price: 15, img: plant2 },
  { id: 3, name: 'Aloe Vera', category: 'Succulents', price: 10, img: plant3 },
  { id: 4, name: 'Rose', category: 'Outdoor', price: 20, img: plant4 },
  { id: 5, name: 'Tulip', category: 'Outdoor', price: 18, img: plant5 },
  { id: 6, name: 'Bamboo Palm', category: 'Indoor', price: 30, img: plant6 },
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = plant => {
    dispatch(addToCart(plant));
  };

  const isInCart = id => cartItems.find(item => item.id === id);

  // 🔹 Create a list of unique categories
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <>
      <Header />

      {/* 🔹 Render plants grouped by category */}
      <div className="products">
        {categories.map(cat => (
          <div key={cat}>
            <h2 style={{ margin: '20px 0', color: '#27ae60' }}>{cat} Plants</h2>
            <div className="product-category">
              {plants
                .filter(p => p.category === cat)
                .map(plant => (
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
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListing;
