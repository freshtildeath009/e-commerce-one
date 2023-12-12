import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SideFilterMenu from '../components/SideFilterMenu';
import { ProductContext } from '../context/productContext';
const AllProducts = () => {
    const { products, setProducts } = useContext(ProductContext)
    console.log(products);

    useEffect(() => {
        document.title = "E-commerce"
    }, [])


    const renderAllProducts = products?.map(item => {
        return (

            <div key={item.id} className='single-product-container'>
                <Link className='product-link' to={`/allproducts/${item.id}`}>
                    <div className='product-photo-container'>
                        <img id='product-photo' src={item.image} alt="" />
                    </div>
                    <div className='product-info-container'>
                        <h1 id='product-info'>{item.title}</h1>
                        <h1 id='product-info'>{item.price}$</h1>
                    </div>
                </Link >
            </div >
        )
    })
    return (
        <>
            <Main>
                <SideFilterMenu />
                <AllProductsSection>
                    {/* Single product part */}
                    {renderAllProducts}
                    {/* Single product part end*/}

                </AllProductsSection>

            </Main>
        </>
    )
}

export default AllProducts

const Main = styled.main`
    display: flex;
    justify-content: center;
    font-family: var(--ff-general);
`

const AllProductsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 2rem 0;
    
        .product-link{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: var(--txt-blk);
        }
        .single-product-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            height: 350px;
            width: 310px;
            margin-bottom: 1rem;
            
        }
        
        .single-product-container:hover{
            box-shadow: var(--bx-shadow);
        }

        .product-photo-container{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 250px;
            width: 250px;
        }
        #product-photo{
            height: 100%;
            width: 100%;
        }

        .product-info-container{
            padding: 0 1rem;
        }
`
