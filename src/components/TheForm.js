import React, { useState } from 'react';
import styled from 'styled-components';
import { validate } from 'bitcoin-address-validation';
import axios from 'axios';
import Card from './Card';

// Styles

const Button = styled.button`
    background-color: #058892;
    border: none;
    border-radius: .25rem;
    box-sizing: border-box;
    color: #bfe1e3;
    padding: .5rem 2rem;
    margin: 0 1rem;
    width: 100px;
    transition: all 200ms ease-in-out;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    &:hover {
        background-color: #1d6c71;
        cursor: pointer;
        color: #eaf5f6;
    }
`;

const Input = styled.input`
    box-sizing: border-box; 
    border: none;
    border-radius: .25rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    max-width: 100%;
    padding: .5rem 2rem;
    width: 340px;

    border: ${ props => props.valid ? "2px solid #2aa232" : "2px solid red"};
    border: ${ props => props.trySubmit ? "" : "none"};
`;

const Small = styled.small`
    margin-top: .5rem;
    color: red;
`;

const Container = styled.div`
    display: flex;
    align-items: flex-start;

    @media(max-width: 550px) {
        flex-direction: column;
        align-items: center;

        ${Button} {
            margin-top: 1rem;
        }

        ${Input} {
            padding: .5rem .25rem;
            text-align: center;
        }
    }
`;

const CardContainer = styled.div`
    display: flex;
    margin-top: 2rem;
    flex-wrap: wrap;
    & > *{
        margin: .25rem 1rem 0 0;
    }
    @media(max-width: 550px) {
        flex-direction: column;
        align-items: center;
        & > * {
            width: 80%;
        }
    }
`;

// Component Template

const TheForm = () => {

    const [addressKey, setAddressKey] = useState('');
    const [valid, setValid] = useState(false);
    const [trySubmit, setTrySubmit] = useState(false);
    const [balance, setBalance] = useState({})

    // addrress key for testing: 1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY 
    
    const handleChange = (event) => {
        setAddressKey(event.target.value)
    }   

    const handleSubmit = (event) => {
        event.preventDefault();
        // The address get validated
        if (validate(addressKey)) {
            setValid(true);
            setTrySubmit(true);
        } else {
            setValid(false);
            setTrySubmit(true);
        }
        
        // Using setValid and setAddress so the calls can be async
        // ideally would have a loading component.
        setValid((state) => {
            if (state === true) {
                setAddressKey((key) => {
                    
                    const getBalance = async (addressKey) => {
            
                        const response = await axios.get(`http://localhost:8000/balance/${addressKey}`)
                        .catch((err) => console.log("Error:", err));
            
                        if (response && response.data) setBalance(response.data);
                    }

                    getBalance(key);
                    return key;
                })
            }

            return state
        });
    }

    //Renders the cards if balance is not empty
    let cards
    if (balance.Confirmed || balance.Unconfirmed) {
         cards = 
        <CardContainer>
            <Card 
                Title="Confirmed balance"
                HeaderColor="green"
                Value={balance.Confirmed}    
            />
            <Card 
                Title="Unconfirmed balance"
                HeaderColor="tomato"
                Value={balance.Unconfirmed}
            />
        </CardContainer>
        }    

    return ( 
        <form noValidate onSubmit={handleSubmit}>
            <Container> 
                <div style={{display: "flex", flexDirection: "column", maxWidth: "100%"}}>
                    <Input 
                        placeholder="Endereço Bitcoin"
                        value={addressKey} 
                        onChange={(e) => handleChange(e)}
                        valid={valid}
                        trySubmit={trySubmit}
                    />
                    {trySubmit && !valid ? <Small>Erro! O endereço bitcoin não é válido.</Small> : null}
                </div>
                <Button><strong>Enviar</strong></Button>
            </Container>
            {cards}   
        </form>
        );
}
 
export default TheForm;