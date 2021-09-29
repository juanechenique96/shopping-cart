// Third
import React, { FC, useState, useEffect } from 'react'
// Component
import { Card } from './Card'
//styles
import { ProductList } from '../styles/ProductList'
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

    return (
        <ProductList>
            {products.map(p => {
                return (
                    <div className="container" key={p.id}>
                        <Card data={p} />
                    </div>
                )
            })}
        </ProductList>
    )
}