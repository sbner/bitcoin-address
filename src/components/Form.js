import React, { Component } from 'react';
import styled from 'styled-components';
import { validate } from 'bitcoin-address-validation';

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

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addressKey: '',
            valid: false,
            trySubmit: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({addressKey: event.target.value});
    }

    handleSubmit = (event) => {
        validate(this.state.addressKey)? 
            (this.setState({valid: true}, () => {console.log("Valid Address"); this.setState({trySubmit: true})})):
            (this.setState({valid: false}, () => {console.log("Error! Invalid Address"); this.setState({trySubmit: true})}));
        event.preventDefault();
    }

    render() { 
        return ( 
            <form noValidate onSubmit={this.handleSubmit}>
                <Container> 
                    <div style={{display: "flex", flexDirection: "column", maxWidth: "100%"}}>
                        <Input 
                            placeholder="Endereço Bitcoin"
                            value={this.state.addressKey} 
                            onChange={this.handleChange}
                            valid={this.state.valid}
                            trySubmit={this.state.trySubmit}
                        />
                        {this.state.trySubmit && !this.state.valid ? <Small>Erro! O endereço bitcoin não é válido.</Small> : null}
                    </div>
                    <Button><strong>Botão</strong></Button>
                </Container>
            </form>
         );
    }
}
 
export default Form;