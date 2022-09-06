import { SimpleGrid, Box, Stack, HStack, Text, Img, Popover } from '@chakra-ui/react'
import { getImageSize } from 'next/dist/server/image-optimizer'
import React from 'react'
import { bestseller, outlets } from '../data'

const Cart = () => {
  return (
    <SimpleGrid h={'1020px'} marginBottom={'30rem'}>
      <Box marginTop={'2rem'}>
        <HStack spacing={'86rem'}>
          <Text fontSize={'48px'}>Bestsellers </Text>
          <Text fontSize={'20px'}>
            <a href="VIEW ALL">VIEW ALL</a>
          </Text>
        </HStack>

        <HStack paddingLeft={'24px'} spacing={'3rem'} marginBottom={'2rem'}>
          {bestseller.map((value) => (
            <Box key={value?.id} w={'280px'} h={'340px'} border="1px solid black">
              <Text fontSize={'23px'}></Text>
              <Box
                width={'240px'}
                height={'240px'}
                display={'block'}
                margin={'0 auto'}
                border={'2px solid #bb87ff'}>
                <Img src={value?.src} alt="" />
              </Box>
              <Text fontSize={'23px'} display={'flex'} justifyContent={'center'}>
                {value?.name}
              </Text>
              <Text fontSize={'23px'} display={'flex'} justifyContent={'center'}>
                {value?.price}
              </Text>
            </Box>
          ))}
        </HStack>
      </Box>

      <Box>
        <HStack spacing={'94rem'}>
          <Text fontSize={'48px'}> Outlets </Text>
          <Text fontSize={'20px'}>
            <a href="VIEW ALL">VIEW ALL</a>
          </Text>
        </HStack>

        <Box>
          <SimpleGrid columns={4} paddingLeft={'24px'} spacing={'3rem'} gap={'3rem'}>
            {outlets.map((value) => (
              <Box key={value?.id} w={'280px'} h={'340px'} border="1px solid black">
                <Box
                  width={'240px'}
                  height={'240px'}
                  display={'block'}
                  margin={'0 auto'}
                  border={'2px solid #bb87ff'}
                  cursor={'pointer'}>
                  <Popover>
                    <Img src={value?.src} alt="" width={'200px'} height={'240px'} />
                  </Popover>
                </Box>
                <Text fontSize={'23px'} display={'flex'} justifyContent={'center'}>
                  {value?.name}
                </Text>
                <Text fontSize={'23px'} display={'flex'} justifyContent={'center'}>
                  {value?.price}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </SimpleGrid>
  )
}

export { Cart }
