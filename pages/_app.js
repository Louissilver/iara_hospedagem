import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato';
  }
`

const theme = {
  colors: {
    primary: '#58c4c4',
    secondary: '#7c3792',
    backgroundButton: '#37a0a0',
    backgroundHeader: '#612674',
    backgroundTitle: '#652e78',
    backgroundSubtitle: '#a87bb7',
    backgroundFooter: '#25303e',
    backgroundContainer: '#f6f6f6',
    text: '#FFFFFF'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
