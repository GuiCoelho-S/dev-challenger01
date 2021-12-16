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
        font-size: clamp(2rem, 5vw, 5rem); 
        width:clamp(300px, 100%, 756px);
        font-weight:700;
    }
    
    h3 {
        font-size: clamp(1.2rem, 5vw, 2rem); 
        font-weight:300;
        width:clamp(300px, 100%, 756px);
    }

    z-index:2;
}
@media (max-width:450px){
        

        div {
            padding-left:0;
            align-items:center;

            h2,h3 {
                text-align:center;
            }
        }
    }

`

export const AboutUs = styled.article`
width:clamp(300px, 100%, 1440px);
height:500px;
background-color:var(--white);
-webkit-clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);
clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);
gap:20px;
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
        text-align:center;
        padding-top:20px;
    }
    p {
        font-size:1.2rem;
    }
}

@media (max-width:450px){
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 94%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 94%, 0% 100%);
        article {
            align-items:center;
        }
        p {
        width:90%;
      }
    }
`
export const Img = styled.img`
width:100%;
height:100%;
object-fit:cover;
`

export const FooterHome = styled.footer`

width:100%;
height:90px;
background-color:var(--grey);
display:grid;
place-items:center;
padding:16px 0;
span {
    font-weight:700;
}
P {
    FONT-WEIGHT:300;
}
`

export const Modal = styled.div`

position:absolute;
width:100%;
height:100%;
display:grid;
place-items:center;

    article {
        width:clamp(240px, 94%, 600px);
        border-radius:12px;
        height:300px;
        z-index:4;
        background-color:var(--grey);
        position:relative;
        background-color:whitesmoke;
        display:grid;
        place-items:Center;

        h3 {
            font-weight:700;
            color:var(--black);
            font-size:2rem;
            text-align:center;
        }

        svg {
            width:80px;
            height:80px;
            fill: #f7cd2f;
        }
        p {
            text-align:center;
            font-size:1.2rem;
        }

        aside {
            display:flex;
            justify-content:center;
            gap:20px;

            svg {
                width:40px;
                height:40px;
                fill:var(--black);
            }
        }
        
    }

    h4 {
        font-weight:300;

        span {
            font-weight:700;
        }
    }

:after {
    content:'';
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.9);
    opacity:1;
    position:absolute;
    top:0;
    left:0;
    z-index:3;
}
`

export const ExitModal = styled.div`

position:absolute;
top:10px;
right:0px;
width: 60px;
height:60px;
dipslay:grid;
place-items:center;


button {
    cursor:pointer;
    width:50px;
    height:50px;
    background-color: transparent;
    border:none;
svg {
    width:100%;
    height:100%;
    fill:var(--red);
}
}
`