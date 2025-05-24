/* ------------------- 6. src/components/MenuItem.jsx ---------------------- */
import React, { useState } from 'react';
import IngredientsModal from './IngredientsModal';

function MenuItem({ item }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, margin: 16, width: 250 }}>
      <img src={item.image_url} alt={item.name} style={{ width: '100%', maxHeight: 270, objectFit: 'cover' }} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p><strong>{parseFloat(item.price)}L.E</strong></p>
      <button onClick={() => setShowModal(true)}>View Ingredients</button>
      {showModal && (
        <IngredientsModal ingredients={item.ingredients} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default MenuItem;