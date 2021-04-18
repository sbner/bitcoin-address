import React from 'react';
import styled, { keyframes } from 'styled-components';
import Nav from '../components/Nav'
import LadyBit from '../img/lady-bitcoin-resized.jpg'
import Form from '../components/Form'

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
    color: #bfe1e3;
    padding: 1rem 8%;
`;

const H1 = styled.h1`
    font-size: 3rem;
    max-width: 100%;
    width: 700px;
`;


const blinker = keyframes`
    50% {
        opacity: 0;
    }
`;

const Blink = styled.span`
    animation: ${blinker} 2s linear infinite;
    `;

const Home = () => {
    return ( 
        <HomeDiv>
            <Nav />
            <Main>
                <H1>Sit aliqua id magna nisi dolor anim duis ipsum id proident do<Blink>?</Blink></H1>
                <Form/>
            </Main>
        </HomeDiv>
     );
}
 
export default Home;