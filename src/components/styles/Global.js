import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    font: 1em/1.5 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    scroll-behavior: smooth;
    font-size: 1.15em;
    font-weight: 400;
    letter-spacing: 0;
    color: rgb(0, 37, 46);
  }

  h1 {
    font-weight: 700;
    line-height: 1.3;
    color: black;
  }

  h2 {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.5;
  color: black;
  }
  img {
    border-style: none;
    vertical-align: top;
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
    color: #fff;
    outline: none;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }
`

export default GlobalStyles
