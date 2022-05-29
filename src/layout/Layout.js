import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import {Container} from './LayoutStyles'
import {motion} from "framer-motion";

export const Layout = ({children}) => {
  return (
    <Container>
      <Header/>
      <motion.div initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0,
          x: -10,
          y: 0
        },
        pageAnimate: {
          opacity: 1,
          x: 0,
          y: 0
        }
      }} transition={{
        ease: "easeInOut"
      }}>
        {children}
      </motion.div>
      <Footer/>
    </Container>
  )

}
