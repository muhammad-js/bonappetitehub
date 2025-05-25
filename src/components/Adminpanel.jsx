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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
      <h2>Add Menu Item</h2>
      <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
      <input type="number" step="0.01" placeholder="Price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
      <input type="text" placeholder="Image URL" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} />
      <textarea placeholder="Ingredients (comma-separated)" value={formData.ingredients} onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })} />
      <button type="submit">Save Menu Item</button>
    </form>
  );
}

export default AdminPanel;