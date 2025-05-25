/* ----------------------- 3. src/pages/Home.jsx --------------------------- */
import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import MenuItem from '../components/MenuItem';

function Home() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from('menu_items').select('*');
      if (error) setError(error.message);
      else setMenuItems(data);
      setLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Bonappetitehub</h1>
      </div>
      {loading ? (
        <p>Loading menu items...</p>
      ) : error ? (
        <p>Error fetching menu: {error}</p>
      ) : (

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        // <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        //   {menuItems.map((item) => (
        //     <MenuItem key={item.id} item={item} />
        //   ))}
        // </div>
      )}
    </div>
  );
}

export default Home;