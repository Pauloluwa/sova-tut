import React from 'react'
import { Box, Button, Container, VStack, SimpleGrid, Img, Text, Spacer } from '@chakra-ui/react'

const Welcome = () => {
  return (
    <SimpleGrid
      w="100%"
      bg={'white'}
      padding="20px 0 20px 0"
      spacingX="40px"
      backgroundColor={'#ede8e7'}>
      <Box display="flex">
        <VStack paddingTop={'20%'} paddingLeft={'5rem'}>
          <Img src="/images/bangle.png" alt="logo" />
          <Img src="/images/earings.png" alt="logo" />
          <Img src="/images/neckpiece.png" alt="logo" />
        </VStack>

        <Container display="flex">
          <Box width={'620px'} height={'620px'}>
            <Img src="/images/facecard.png" alt="logo" width={'full'} height={'full'} />
          </Box>

          <Spacer />
          <Box>
            <Box width={'380px'}>
              <Text marginLeft={'-3rem'} fontStyle={'italic'}>
                Litkovska
              </Text>
              <Text marginLeft={'7rem'} fontStyle={'italic'}>
                Collection
              </Text>
            </Box>

            <Button
              w={'260px'}
              h={'52px'}
              bgColor={' #e36709 '}
              color={'white'}
              marginLeft={'20rem '}
              marginTop={' 2rem'}>
              See More
            </Button>

            <Img src="/images/jewelrypics.png" alt="logo" width="360px" paddingTop={'6rem'} />
          </Box>
        </Container>

        <VStack paddingTop={'35%'} paddingRight={' 4rem '}>
          <Img src="/images/facebook.png" alt="logo" />
          <Img src="/images/instagram.png" alt="logo" />
          <Img src="/images/facebook.png" alt="logo" />
        </VStack>
      </Box>
    </SimpleGrid>
  )
}

export { Welcome }
