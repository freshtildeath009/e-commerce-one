import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductDetail = () => {
    const params = useParams()
    const [product, setProduct] = useState(null)
    const [productSize, setProductSize] = useState({
        productMeasurement: ""
    })


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [params.id])

    useEffect(() => {
        document.title = "Pingu's Product Detail"
    }, [])

    // Get user order size
    const _handleProductSizeForm = (event) => {
        const { name, value } = event.target

        setProductSize(prevProductSize => {
            return {
                ...prevProductSize,
                [name]: value
            }
        })
    }
    // Add to cart user ordered item and size
    const _handleAddToCart = () => {
        let item = product
        setProduct({ ...product, product: item, productMeasurement: productSize.productMeasurement })
    }
    return (
        <>
            <ProductDetailContainer>
                {product ? (
                    <>
                        <div className='product-photo-container'>
                            <img id='product-photo' src={product.image} alt="" />
                        </div>
                        <div className='product-detail-container'>
                            <div className='product-info'>
                                <h1 id='title'>{product.title}</h1>
                                <br />
                                <h1>{product.description}</h1>
                                <h1 id='product-price'>{product.price}$</h1>
                            </div>
                            <form className='product-size-container'>
                                <select name="" id="">
                                    <option value="">US</option>
                                    <option value="">UK</option>
                                </select>
                                <div className='btn-size'>
                                    <label htmlFor="xxl">XXL</label>
                                    <input id='xxl' name='productMeasurement' type="radio" value="xxl" onChange={_handleProductSizeForm} />

                                    <label htmlFor="xl">XL</label>
                                    <input id='xl' name='productMeasurement' type="radio" value="xl" onChange={_handleProductSizeForm} />

                                    <label htmlFor="l">L</label>
                                    <input id='l' name='productMeasurement' type="radio" value="l" onChange={_handleProductSizeForm} />

                                    <label htmlFor="m">M</label>
                                    <input id='m' name='productMeasurement' type="radio" value="m" onChange={_handleProductSizeForm} />

                                    <label htmlFor="s">S</label>
                                    <input id='s' name='productMeasurement' type="radio" value="s" onChange={_handleProductSizeForm} />

                                </div>
                            </form>
                            <div className='product-add-to cart-container'>
                                <button onClick={_handleAddToCart}>ADD TO CART</button>
                            </div>
                        </div>
                    </>
                ) : <h1>Loading...</h1>}
            </ProductDetailContainer>
        </>
    )
}

export default ProductDetail

const ProductDetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @media (max-width: 600px){
       flex-wrap: wrap;
    }
        .product-photo-container{
            display: flex;
            justify-content: center;
        }

        #product-photo{
            padding: 1rem;
            width:  430px;
            height: 580px;
            min-width: 430px;   
        }
        .product-detail-container{
            justify-content: center;
            display: flex;
            padding: 5rem;
            flex-direction: column;
            
        }
        .product-info{
            width: 100%;
            max-width: 600px;
        }
        
        #title{
            font-size: 2rem;
            font-weight: 900;
        }
        .product-size-container{
            margin: 1rem 0;
        }
        
        #product-price{
            color: var(--clr-dark-orange);
            font-size: var(--fs-2);
        }

        @media (max-width: 768px){
            #product-photo{
                min-width:  300px;
            }
        }
        @media (max-width: 500px){
            #product-photo{
                width:  300px;
            height: 400px;
            }
        }
        @media (max-width: 280px){
            .product-photo-container{
                min-height: 380px;
                min-width: 240px;
            }
        }
`