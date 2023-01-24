import React from 'react';
import products from "../dataAPI/dataProduct.json"
import Cards from "./Cards"
import { Link } from "react-router-dom"

export default function Imobilier() {
    return (
        <section className='home_Product'>
            {products.map((product) => {
                    return (
                        <article className='cartProduct' key={product.id}>
                            <Link to={`/products/${product.id}`}>
                             <Cards image={product.cover} title={product.title} />
                            </Link>

                        </article>
                    )
                })
            }

        </section>
    );
};

