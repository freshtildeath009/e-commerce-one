import React from 'react'
import styled from 'styled-components'

const SideFilterMenu = () => {

    return (
        <>
            <Aside>
                <h1 id='gender-type-name-text'>MEN CLOTHING</h1>
                <div className='product-type-container'>
                    <div className='gender-type-category category'>
                        <h1 id='type-name-text-category'>GENDER</h1>
                        <ul >
                            <li><input type="radio" /> Male</li>
                            <li><input type="radio" /> Female</li>
                        </ul>
                    </div>
                    <div className='men-items-category category'>
                        <h1 id='type-name-text-category'>MENS ITEMS</h1>
                        <ul>
                            <li><input type="radio" /> Hoddie</li>
                            <li><input type="radio" /> Short</li>
                            <li><input type="radio" /> T-shirt</li>
                            <li><input type="radio" /> Pant</li>
                            <li><input type="radio" /> Oversize-T-shirt</li>
                            <li><input type="radio" /> Accesories</li>
                        </ul>
                    </div>
                    <div className='woman-items-category category'>
                        <h1 id='type-name-text-category'>WOMENS ITEMS</h1>
                        <ul>
                            <li><input type="radio" /> Hoddie</li>
                            <li><input type="radio" /> Short</li>
                            <li><input type="radio" /> T-shirt</li>
                            <li><input type="radio" /> Pant</li>
                            <li><input type="radio" /> Oversize-T-shirt</li>
                            <li><input type="radio" /> Accesories</li>
                        </ul>
                    </div>
                </div>
            </Aside>
        </>
    )
}

export default SideFilterMenu

const Aside = styled.aside`
    display: flex;
    justify-content: center;
    width: 250px;

        #gender-type-name-text{
            padding: 1rem;
            font-size: var(--fs-2);
        }
        .product-type-container{
            display: flex;
            margin: 100px 0 0 100px;
            flex-direction: column;
            position: fixed;
            height: 100%;
            width: 250px;
        }
            
        .category{
            margin: 30px 0;
        }

        #type-name-text-category{
            font-weight: var(--fw-600);
            font-size: var(--fs-1-2)
        }
`