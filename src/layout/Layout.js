import React from 'react'
import {Container} from './LayoutStyles'
import {motion} from "framer-motion";

export const Layout = ({children}) => {
  return (
    <motion.div initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0.5,
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
      <Container>
        {children}
      </Container>
    </motion.div>
  )

}
