import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import {Container} from './LayoutStyles'

export const AltLayout = ({children}) => {
  return (
      <Container>
        <Header noTagLinks/>
        {children}
        <Footer/>
      </Container>
  )

}
