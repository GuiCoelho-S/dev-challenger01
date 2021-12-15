import styled from 'styled-components';

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
justify-content:space-between;
align-items:center;
`
export const Introduction = styled.main`

position:relative;
width:clamp(300px, 90%, 1440px);
height:946px;
background-color:white;
background-image: url("../../assets/img/1.jpg");
padding:0 10px;
display: flex;
align-items:start;
justif-contetn:center;
gap:10px;
border:1px solid pink;
`

