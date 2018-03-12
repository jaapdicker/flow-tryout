import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

export const Container = styled.div`
    padding: 40px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Link = styled(L)`
    color: white;
    background: #fa0006;
    font-size: 32px;
    font-style: italic;
    font-weight: bold;
    display: block;
    text-decoration: none;
    font-family: Futura;
    text-transform: capitalize;
    margin-bottom: 20px;
    padding: 12px 16px;
    text-align: center;
`;

export const Input = styled.input`
    color: black;
    background: #e3e3e3;
    font-size: 32px;
    font-style: italic;
    font-weight: bold;
    display: block;
    margin-bottom: 20px;
    font-family: Futura;
    padding: 12px 16px;
    margin: 0 0 20px 0;
    text-align: center;
    border: 0;
    outline: 0;

    &::placeholder {
        color: #ffffff;
    }

`;
export const Text = styled.p`
    color: white;
    background: ${props => props.background || '#ccc'};
    font-size: 32px;
    font-style: italic;
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    font-family: Futura;
    text-transform: capitalize;
    padding: 12px 16px;
    margin: 0 0 20px 0;
    text-align: center;
`;
