import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body {
    background-color:var(--grey);
    font-family: 'Roboto', sans-serif;
}

:root {
    --black:#333333;
    --red_light:#EE5253;
    --green:#10AC84;
}
`

export default GlobalStyle;

export const redContainer = '#D92223';
export const greyContainer = '#EAEAEA';
export const whiteContainer = '#FFFFFF';