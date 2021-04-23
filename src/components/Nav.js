import React from 'react';
import styled from 'styled-components';

// Styles

const NavBar = styled.div`
    align-items: center;
    background-color: transparent;
    border-bottom: 1px solid #1d6c71; 
    color: #bfe1e3;
    display: flex;
    justify-content: space-between;
    padding: .25rem 1rem 1rem 1rem;
`

const Link = styled.a` 
    box-sizing: border-box;
    color: #bfe1e3;
    padding: .25rem 1rem;
    text-decoration: none;
    transition: all 300ms ease-in-out;

    &:hover {
        color: #113e41;
        text-decoration: underline;
    }
`

// Component Templates

const Nav = () => {
    return ( 
        <NavBar>
            <div>
                LOGO
            </div>
            <div>
                <Link href="h">About</Link>
            </div>
        </NavBar>
     );
}
 
export default Nav;