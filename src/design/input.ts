import styled from 'styled-components';

interface inputProps {
    status?: string
}

export const UIInput = styled.input<inputProps>`

width:clamp(280px, 100%, 340px);
height:60px;
border-radius:8px;
border:1px solid;
border-color:${(props) => props.status === 'true' ? ('var(--green)') : ('var(--grey)')};
padding-left:8px;
padding-right:10px;
font-size:1.2rem;
font-weight:100;
color: #333;

outline:1px solid transparent;
:focus {
    border:1px solid #ee5c13;
}
`