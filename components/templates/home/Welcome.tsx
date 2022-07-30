import React from 'react'
import { Box, Button, Container, HStack, SimpleGrid } from '@chakra-ui/react'

const Welcome = () => {
  return (
    <SimpleGrid h={'920px'} w="100%" bg={'white'} padding="0" spacingX="40px">
      {/* <Container h={'920px'} maxW={'1204px'} display="flex"> */}
      <HStack>
        <img src="/images/bangle.png" alt="logo" />
        <img src="/images/neckpiece.png" alt="logo" />
        <img src="/images/earings.png" alt="logo" />
      </HStack>
      <Container display="flex">
        <Container>
          <img src="/images/facecard.png" alt="logo" width="620px" height="620px" />
        </Container>
        <Container w={'500px'}>
          <h1> Litkovska Collection </h1>
          <Button w={'260px'} h={'52px'} bgColor={' #e36709 '} color={'white'}>
            See More
          </Button>
        </Container>
        <img src="/images/jewelrypics.png" alt="logo" width="360px" height="360px" />
      </Container>
      <HStack>
        <img src="/images/facebook.png" alt="logo" />
        <img src="/images/instagram.png" alt="logo" />
        <img src="/images/facebook.png" alt="logo" />
      </HStack>
      {/* </Container> */}
    </SimpleGrid>
  )
}

export { Welcome }
