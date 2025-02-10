import React from 'react'
import { ProductImage, ProductBody, ProductButton, ProductButtonWrapper, ProductContainer, ProductDescription, ProductHeader, ProductImageContainer, ProductPrice } from '../../ui/ProductCard'

const ProductCard = ({ ImageSrc, name, price, count, title, color, size, AddToCart }) => {
    return (
        <ProductContainer>
            <ProductImageContainer>
                <ProductImage src={ImageSrc} />
            </ProductImageContainer>
            <ProductBody>
                <ProductHeader>{name}</ProductHeader>
                <ProductPrice>{price}$</ProductPrice>
                <ProductDescription>
                    {title}
                </ProductDescription>
                <ProductButtonWrapper>
                    <ProductButton bg="blue" color="white">{count}</ProductButton>
                    <ProductButton bg="black" color="white">{size}</ProductButton>
                    <ProductButton
                        onClick={() => AddToCart({ name, price, count, title, color, size })}
                        bgcolor="white" color='blue'>Add to Cart</ProductButton>
                </ProductButtonWrapper>
            </ProductBody>
        </ProductContainer>
    )
}

export default ProductCard