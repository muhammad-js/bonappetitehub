import React, { useState } from 'react';
import IngredientsModal from './IngredientsModal';
// import './Menu.css'; // 👈 import the CSS here

function MenuItem({ item }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="menu-item">
      <img src={item.image_url} alt={item.name} />
      <h3 style={{ margin: '10px 0 5px' }}>{item.name}</h3>
      <p>{item.description}</p>
      <p><strong>{parseFloat(item.price)} L.E</strong></p>
      <button onClick={() => setShowModal(true)}>View Ingredients</button>
      {showModal && (
        <IngredientsModal ingredients={item.ingredients} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default MenuItem;
