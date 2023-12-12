import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <>
            <HeaderNav>
                <nav className='navbar'>
                    <Link>
                        <div className='header-logo-container'>
                            <img id='header-logo' src="./images/logo.png" alt="" />
                        </div>
                    </Link>
                    <ul className='header-links-container'>
                        <li><Link id='link' to="/">HOME</Link></li>
                        <li><Link id='link' to="/allproducts">ALL PRODUCTS</Link></li>
                    </ul>
                </nav>
            </HeaderNav>
        </>
    )
}

export default Header

const HeaderNav = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    

        .navbar{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 70px;
            background: white;
            position: fixed;
        }

        .header-logo-container {
            height: 50px;
            width: 50px;
        }

        #header-logo{
            height: 100%;
            width: 100%;
        }

        .header-links-container{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #link{
            color: var(--txt-blk);
            padding: 1rem;
        }
`
