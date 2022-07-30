import { Box } from '@chakra-ui/react'
import React from 'react'

const Maincomponent = () => {
  return (
    <Box h={'10rem'} w="100%" bg={'white'} padding="0">
      <div>
        <div>
          <img src="/images/logo.png" alt="logo" />
          <img src="/images/logo.png" alt="logo" />
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div>
          <img src="/images/logo.png" alt="logo" />
          <h1>Litkovska Collection</h1>
        </div>
      </div>
    </Box>
  )
}

export { Maincomponent }
