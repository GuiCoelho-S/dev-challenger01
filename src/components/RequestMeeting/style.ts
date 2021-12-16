import styled from 'styled-components';

export const ContainerRequest = styled.section`

margin-top:100px;
width:clamp(300px, 100%, 1440px);
display:flex;
align-items:center;
justify-content:Center;
background-color:var(--white);

  div {
    width:clamp(300px, 100%, 1000px);
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 40px 0;
    gap:20px;
    bordeR:1px solid red;

    h3 {
      font-size:3rem;
      font-weight:700;
    }

    p {
      font-size:1.2rem;
    }

    button {
      transform:none;
    }
  }
`;

export const userInteraction = styled.section`

display: flex;
justify-content:space-between;
flex-wrap:wrap;
align-items:end;
gap:20px;
aside {
  display:flex;
  flex-direction:column;
  align-items:start;
  position:relative;

  label {
    padding-bottom:5px;
    color:#000000;
  }

  span {
    bottom:10px;
    right:10px;
    svg {
    width:30px;
    height:30px;
    z-index:2;
  }
  }
}

@media (max-width:900px){
  justify-content:space-evenly;
}
`

export const Verified = styled.span`
  position:absolute;
  svg {
    fill:var(--green);
  }
`

export const Denied = styled.span`
  position:absolute;
  svg {
    fill:var(--red);
  }
`