import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import NavbarComponent from '../components/Navbar';

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            Axios.get('http://localhost:3001/api/productos')
                .then(response => {
                    setProducts(response.data)
                })
                .catch(error => {
                    console.error('Error al obtener los productos:', error);
                });
        }, []
    );

    return (
        <>
            <NavbarComponent />
            <div>
                <h1>Lista de Productos</h1>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.nombre_producto}</li>
                    ))}
                </ul>
            </div>
        </>
    );

}

export default ProductList;