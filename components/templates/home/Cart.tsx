import { SimpleGrid, VStack, Img } from '@chakra-ui/react'
import React from 'react'

const Cart = () => {
  return (
    <SimpleGrid>
      <VStack>
        <Img src="/images/bangle.png" alt="logo" />
        <Img src="/images/earings.png" alt="logo" />
        <Img src="/images/neckpiece.png" alt="logo" />
      </VStack>
    </SimpleGrid>
  )
}

export  { Cart }
