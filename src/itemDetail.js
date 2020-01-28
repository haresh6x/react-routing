import React, { useState, useEffect } from 'react';
import './App.css';

function ItemDetail({match}) {

    useEffect(() => {
        const fetchItem = async () => {
            const data = await fetch(`https://reqres.in/api/users/${match.params.id}`)
            const item = await data.json();
            setItem(item.data);
            console.log(item);
        };
        fetchItem();
        console.log(match)
    },[match]);

    const [item, setItem] = useState({});

    return (
        <div>
            <img src={item.avatar} alt="" />
            <h1>Full Name: {item.first_name + ' ' + item.last_name}</h1>
            <h3>Item level: {item.id}</h3>
            <h3>Email: {item.email}</h3>
        </div>
    );
}

export default ItemDetail;
