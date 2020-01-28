import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    async function fetchItems() {
        const data = await fetch('https://reqres.in/api/users?page=2');

        const items = await data.json();
        console.log(items.data);
        setItems(items.data);
    };

    return (
        <div>
            <h1>Shop Page</h1>
            {items.map(item=>(
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}> {item.first_name}</Link></h1>
            ))}
        </div>
    );
}

export default Shop;
