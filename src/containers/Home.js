import React from 'react';
import styled, { keyframes } from 'styled-components';
import Nav from '../components/Nav';
import LadyBit from '../img/lady-bitcoin-resized.jpg';
import TheForm from '../components/TheForm';

// Styles

const HomeDiv = styled.div`
    background-image: url(${LadyBit});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 50%;
    height: 100vh;
    width: 100vw;
`;

const Main = styled.div`
    padding: 1rem 8%;
    color: #bfe1e3;
    @media(max-width: 550px) {
        padding: .5rem 8%;
    }
`;

const H1 = styled.h1`
    margin: 2rem 0;
    font-size: 3rem;
    max-width: 100%;
    width: 700px;
    @media(max-width: 550px) {
        margin: .5rem 0;
        font-size: 2.5rem;
    }
`;


const blinker = keyframes`
    50% {
        opacity: 0;
    }
`;

const Blink = styled.span`
    animation: ${blinker} 2s linear infinite;
`;

// Component Template

const Home = () => {
    return ( 
        <HomeDiv>
            <Nav />
            <Main>
                <H1>Quer descobrir quanto foi movimentado em algum endereço bitcoin<Blink>?</Blink></H1>
                <TheForm />
            </Main>
            <div>
            </div>
        </HomeDiv>
     );
}
 
export default Home;