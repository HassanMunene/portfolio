import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    .button {
        margin-top: 1.3rem;
        font-size: 1.25rem;
        background-color: ${(props) => props.outline ? 'transparent' : 'var(--gray-1)'};
        padding: .7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color: ${(props) => props.outline ? 'var(--white)' : 'var(--black)'};
    }
    @media only screen and (max-width: 750px) {
        .button {
            font-size: .9rem;
        }
    }
`;

const Button = (props) => {
    return (
        <ButtonStyle outline={props.outline} className='button_wrapper'>
            <Link className='button' to={props.btnLink}>
                {props.btnText}
            </Link>
        </ButtonStyle>
    )
}

export default Button;
