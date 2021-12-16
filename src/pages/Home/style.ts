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
border:1px solid pink;

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
    transform:translateY(-60px);

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

export const AboutUs = styled.article`
width:clamp(300px, 100%, 1440px);
height:500px;
background-color:var(--white);
-webkit-clip-path: polygon(0 0, 100% 0%, 100% 86%, 0% 100%);
clip-path: polygon(0 0, 100% 0%, 100% 86%, 0% 100%);

display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;

section {
    width:408px;
    hieght:466px;

    
}


article {
    width:clamp(300px, 100%, 500px);
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:20px;

    h3 {
        font-size:3rem;
        font-weight:300;
    }
    p {
        font-size:1.2rem;
    }
}
`
export const Img = styled.img`

width:100%;
height:100%;
object-fit:cover;

`
