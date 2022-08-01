import React from 'react'
import { Box, Button, Container, VStack, SimpleGrid } from '@chakra-ui/react'

const Welcome = () => {
  return (
    <SimpleGrid
      h={'920px'}
      w="100%"
      bg={'white'}
      padding="0"
      spacingX="40px"
      backgroundColor={'#ede8e7'}>
      <Container h={'920px'} maxW={'1204px'} display="flex">
        <VStack paddingTop={'20%'}>
          <img src="/images/bangle.png" alt="logo" />
          <img src="/images/neckpiece.png" alt="logo" />
          <img src="/images/earings.png" alt="logo" />
        </VStack>
        <Container display="flex" position={'relative'}>
          <img src="/images/facecard.png" alt="logo" width="620px" />
          <Container position={'absolute'} left={'600px'}>
            <h1> Litkovska</h1>
            <Container left={'900px'}>
              <h1> Collection </h1>
              <Button w={'260px'} h={'52px'} bgColor={' #e36709 '} color={'white'}>
                See More
              </Button>
              <img src="/images/jewelrypics.png" alt="logo" width="360px" />
            </Container>
          </Container>
        </Container>
        <VStack>
          <img src="/images/facebook.png" alt="logo" />
          <img src="/images/instagram.png" alt="logo" />
          <img src="/images/facebook.png" alt="logo" />
        </VStack>
      </Container>
    </SimpleGrid>
  )
}

export { Welcome }
