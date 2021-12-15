import styled from 'styled-components';

export const ContainerHeader = styled.header`
  margin:0 auto;
  width:clamp(300px, 100%, 1440px);
  height:80px;
  background-color:var(--red);
  display:flex;
  justify-content:space-between;
  align-items:center;
  z-index:2;
  h1 {
    font-size:1.5rem;
    font-weight:700;
    color:#fff;
    padding-left:20px;
  }
`;

export const SocialMedias = styled.article`

display:flex;
width:200px;
height: 100%;
align-items:center;

a {
  width:100%;
  height:100%;
  display: flex;
  align-items:center;
  justify-content:center;

  svg {
    height:50%;
    width:50%;
    fill:white;
  }
}
`