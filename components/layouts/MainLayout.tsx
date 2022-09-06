import { Box, calc, Container } from '@chakra-ui/react'
import Footer from '@components/templates/home/Footer'
import { Navbar } from '@components/templates/home/Navbar'
import React from 'react'

interface IProps {
  children: JSX.Element
}

const MainLayout = ({ children }: IProps) => {
  return (
    <Box p={0}>
      <Navbar />
      <Container maxW={'full'} minH={calc.subtract('100vh', '10rem')} p={0}>
        {children}
      </Container>
    
      <Footer />
    </Box>
  )
}

export { MainLayout }
