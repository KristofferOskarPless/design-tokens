/* import '@/styles/globals.css' */
import type { AppProps } from 'next/app'
import * as tokens from '../../tokens/src/style-dictionary-dist/variables.js'
import { createGlobalStyle } from 'styled-components';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

/* const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: tokens.SemanticBackgroundSubtle;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`; */

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

    </>
  );
}