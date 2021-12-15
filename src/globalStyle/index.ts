import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-weight:100;
}

body {
    background-color:var(--grey);
    font-family: 'Roboto', sans-serif;
}

:root {
    --black:#333333;
    --red_light:#EE5253;
    --red:#D92223;
    --grey:#EAEAEA;
    --green:#10AC84;
    --white:#FFFFFF;
}
`

export default GlobalStyle;
