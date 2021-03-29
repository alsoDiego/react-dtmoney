import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop)
    // It's a good practice to set the size in percentual, so the font size will be relative to the font settings of the user. That's good for acessibility
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px relative
        }

        @media (max-width: 720px) {
            font-size: 87.5% // 14px relative
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed
    }
`