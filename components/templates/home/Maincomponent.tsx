import { Box, Heading, Image, Img } from '@chakra-ui/react'
import React from 'react'

const Maincomponent = () => {
  return (
    <Box h={'10rem'} w="100%" bg={'white'} padding="0">
      <Box>
        <Box>
          <Img src="/images/logo.png" alt="logo" />
          <Img src="/images/logo.png" alt="logo" />
          <Img src="/images/logo.png" alt="logo" />
        </Box>
        <Box>
          <Image src="/images/logo.png" alt="logo" />
          <Heading>Litkovska Collection</Heading>
        </Box>
      </Box>
    </Box>
  )
}

export { Maincomponent }
