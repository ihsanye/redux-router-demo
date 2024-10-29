import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';
import Product from '../components/Product';

function ProductDetails() {

    const { id } = useParams();
    /*adresteki uzantiyi,parametreyi yakalar :id */
    return (
        <div>
            <h2>Urun Detaylari</h2>
            {
                products && products.map(product => {
                    if (product.id == id) {
                        return <Product key={id} product={product} />
                    }
                })
            }
        </div>
    )
}

export default ProductDetails