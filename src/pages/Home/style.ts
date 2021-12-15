import styled from 'styled-components';
import Image from '../../assets/img/image-01.png';

export const Title = styled.h1`
color:red;
`;

export const HomeContainer = styled.div`
margin:0 auto;
min-height:100vh;
height:100%;
width:100%;
display:flex;
flex-direction:column;
justify-content:start;
align-items:center;

`
export const Introduction = styled.main`

position:relative;
width:clamp(300px, 100%, 1440px);
background:url(${Image});
background-size:cover;
background-position: center; 
height:700px;
display: flex;
flex-direction:column;
align-items:start;
justify-content:center;
gap:10px;
border:1px solid pink;
transform:translateY(-100px);
:after {
    content:'';
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.6);
    position:absolute;
    z-index:1;
}

div {
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:30px;
    gap:20px;

    h2,h3 {
        color:white;
    }
    h2 {
        font-size:clamp(2rem, 5rem, 5rem);
        width:clamp(300px, 100%, 756px);
        font-weight:700;
    }
    
    h3 {
        font-size:2rem;
        font-weight:300;
        width:clamp(300px, 100%, 756px);
    }

    z-index:2;
}

`
