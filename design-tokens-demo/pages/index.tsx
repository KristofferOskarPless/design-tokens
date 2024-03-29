import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import styled from 'styled-components'
/* import styles from '@/styles/Home.module.css' */
import * as tokens from '../../tokens/src/style-dictionary-dist/variables.js'
import Globalstyle from './_app'
/* import MyComponent from '../components/button.js' */

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const Main = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width:'100vw',
  height:'100vh',
  backgroundColor: tokens.SemanticBackgroundCanvas,
  color: tokens.SemanticTextDefault,
  fontFamily: 'Roboto',
  lineHeight: '24px'
})

const Card = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  backgroundColor: tokens.SemanticBackgroundSurface,
  width: '20rem',
  height: 'Auto',
  borderRadius: tokens.SemanticBorderRadiusUiCard,
  boxShadow: '0px 4px 8px 0px #00000012',
  padding: '1rem 2rem 2rem 2rem',

})

const Button = styled.div({
  backgroundColor: tokens.ColorActionsCtaDefaultBg,
  borderRadius: tokens.SemanticBorderRadiusActions,
  color: tokens.SemanticTextOnPrimary,
  fontSize: '1rem',
  padding: '16 0 16 0',
  height: '3rem',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const P = styled.div({
  color:tokens.SemanticTextMuted,
  fontSize: '1rem',
  marginBottom: '1.5rem'
})

const Komponent = styled.div({
  
})


export default function Home() {
  return (
  <Main>
    <Card>
      <h2> Design Tokens </h2>
      <P>Sint fugiat sunt dolore anim ex deserunt et duis incididunt ut consequat reprehenderit fugiat id. Voluptate ipsum officia elit laborum sint qui officia ad dolore anim excepteur nulla est. Magna ea est occaecat nulla enim nostrud reprehenderit Lorem mollit adipisicing eiusmod dolore deserunt ea.</P>
      <Button>Button</Button>
    </Card>
  </Main> 
  );
}
