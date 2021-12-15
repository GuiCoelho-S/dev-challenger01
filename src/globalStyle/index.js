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
    --grey:#EAEAEA;
    --black:#333333;
    --white:#ffffff;
    --red:#EE5253;
    --green:#10AC84;
}
`

export default GlobalStyle;