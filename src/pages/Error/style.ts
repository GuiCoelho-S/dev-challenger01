import styled from 'styled-components';

export const ContainerError = styled.div`

width:100%;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;

    main {

        width:clamp(200px, 100%, 1440px);
        height:100%;
        display:grid;
        place-items:center;
        background-color:var(--white);

        h1 {
            font-weight:700;
            text-align:center;
        }
        img {
            width:clamp(260px, 94%, 300px);
            height:clamp(260px, 94%, 300px);
            object-fit:cover;
            border:1px solid var(--grey);
            -webkit-box-shadow: 5px 5px 24px 5px rgba(26,32,25,0.72); 
            box-shadow: 5px 5px 24px 5px rgba(26,32,25,0.72);
        }

        span {
            font-weight:700;
        }

        a {
            color:black;
            font-weight:700;
            padding:6px;
        }

        p {
            font-weight:300;
            text-align:center;
        }
    }

`