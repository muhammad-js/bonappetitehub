import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

function AdminPanel() {
  const [formData, setFormData] = useState({
    name: '', description: '', price: '', image_url: '', ingredients: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('menu_items').insert([{
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      image_url: formData.image_url,
      ingredients: formData.ingredients,
    }]);
    if (error) alert('Error saving menu item: ' + error.message);
    else {
      alert('Menu item saved successfully!');
      setFormData({ name: '', description: '', price: '', image_url: '', ingredients: '' });
    }
  };

  return (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh' // full viewport height
  }}>
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        maxWidth: '400px',
        width: '100%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Add Menu Item</h2>
      <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
      <input type="number" step="0.01" placeholder="Price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
      <input type="text" placeholder="Image URL" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} />
      <textarea placeholder="Ingredients (comma-separated)" value={formData.ingredients} onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })} />
      <button type="submit">Save Menu Item</button>
    </form>
  </div>
);

}

export default AdminPanel;