/* ------------- 7. src/components/IngredientsModal.jsx -------------------- */
import React from 'react';

function IngredientsModal({ ingredients, onClose }) {
  const list = ingredients.split(',').map((i) => i.trim());

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ background: '#fff', padding: 20, borderRadius: 8, minWidth: 300, color: 'black' }}>
        <h3>Ingredients</h3>
        <ul>
          {list.map((ing, i) => (<li key={i}>{ing}</li>))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default IngredientsModal;