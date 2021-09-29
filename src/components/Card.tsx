// Third
import React, { FC } from 'react'
// Types
import { ProductsData } from '../types'
// Styles
import { CardContainer } from '../styles/CardContainer'
// Interface
interface CardProp {
    data: ProductsData;
}


export const Card: FC<CardProp> = ({ data }: CardProp) => {

    return (
        <CardContainer className="cardContainer">
            <div className="image-container">
                <div className="descount">
                    <p>20% OFF</p>
                </div>
                <img src={data.image} alt={data.title} />
            </div>
            <h1>{data.title}</h1>
            <p className="price"><span className="price-before">$ {data.price}</span> | $ {Math.round(data.price - data.price * 0.2)}</p>
        </CardContainer>
    )
}