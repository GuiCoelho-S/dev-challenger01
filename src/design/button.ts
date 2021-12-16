import styled, { keyframes } from 'styled-components';

interface ButtonProps {
    width?: string,
    color?: string
}

const animateBtn = keyframes`

0%{ transform:translateY(-5px)};
50% { transform:translateY(5px)};
100% { transform:translateY(-5px)};
`

export const UIButton = styled.button<ButtonProps>`

    width:${(props) => props.width ? (props.width) : ('300px')};
    background-color:${(props) => props.color ? (props.color) : ('var(--red)')};
    border:1px solid;
    border-color:${(props) => props.color ? (props.color) : ('var(--red)')};
    color:var(--white);
    height:60px;
    z-index:2;
    font-size:1.2rem;
    font-weight:100;
    border-radius:6px;
    transform:translateY(20px);
    transition:all 0.5s ease-out;

    :hover {
        background-color:white;
        color:${(props) => props.color ? (props.color) : ('var(--red)')};
    }
    :hover {
        svg {
            fill:var(--red_light);
        }
    }

    svg {
        height:30px;
        width:30px;
        fill:white;
        transform:translateX(10px);       
        animation: 3s ${animateBtn} ease-out infinite;
    }

    display:flex;
    align-items:Center;
    justify-content:space-evenly;
    cursor:pointer;
`;
