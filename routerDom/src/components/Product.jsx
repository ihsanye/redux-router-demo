import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Product({ product }) {

    const { id, name, price } = product;

    const navigate = useNavigate();
    const param = useParams();

    return (
        <div style={{ border: '1px solid black', marginTop: '10px', padding: '10px' }}>
            <h4>Urun Detayi</h4>
            <h5>Isim: {name}</h5>
            <h6>Fiyat: {price}</h6>
            {
                param.id == id ? <button onClick={() => navigate('/products')} >Geri Don</button> : <button onClick={() => navigate('/product-detail/' + id)} >Detaya Git</button>
            }
        </div>
    )
}

export default Product