import { Box, Center, Container, HStack, Icon, Text } from '@chakra-ui/react'
import { FiHeart, FiSearch } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'

const Navbar = () => {
  return (
    <Box h={'10rem'} w={'full'} bg={'brand.biege'} color={'brand.black'}>
      <Container maxW={'1204px'} h={'full'} w={'full'}>
        <HStack w={'full'} spacing={'1rem'} h={'full'}>
          <Box w="25%">
            <Text>Logo</Text>
          </Box>
          <HStack spacing={'1rem'} w={'50%'} h={'full'} justify={'center'}>
            {['jewelry', 'Collection', 'Outlet', 'Our Production'].map((txt, idx) => (
              <Center key={idx} h="full" w={'25%'}>
                {txt}
              </Center>
            ))}
          </HStack>
          <HStack w={'25%'} h={'full'} justify={'flex-end'}>
            {[FiSearch, FiHeart, BsPerson].map((icon, idx) => (
              <Center key={idx} h={'full'} w={'15%'}>
                <Icon as={icon} />
              </Center>
            ))}
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
export { Navbar }
