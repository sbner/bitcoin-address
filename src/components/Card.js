import React from 'react';
import styled from 'styled-components';

// Styles

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    color: #eaf5f6;
    letter-spacing: 1px;
    flex-direction: column;
    border-radius: .25rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 100px;
    width: 200px;
    max-width: 70%;
    background-color: #2a9aa2;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const Header = styled.div`
    border-bottom: 1px solid #d4ebec;
    display: flex;
    justify-content: center;
    padding: .25rem 0;
    background-color: ${props => props.HeaderColor? props.HeaderColor : "transparent"};
    border-radius: .25rem .25rem 0 0;
`;

const Body = styled.div`
    box-sizing: border-box;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

// Component Template

const Card = (props) => {
    return ( 
        <Container>
            <Header HeaderColor={props.HeaderColor}><strong>{props.Title}</strong></Header>
            <Body>{props.Value}<small>Satoshis</small></Body>
        </Container>
     );
}
 
export default Card;