// Third
import React, { FC, useState, useEffect } from 'react'
// Local
import { getProducts } from '../Api'
import { ProductsData } from '../types'


export const CardList: FC = () => {
    const [products, setProducts] = useState<Array<ProductsData>>([])

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data);
            })
    }, [])

    console.log(products)
    return (
        <div>
            {products.map(p => {
                return (
                    <div>
                        <p>{p.title}</p>
                        <img src={p.image} />
                    </div>
                )
            })}
        </div>
    )
}