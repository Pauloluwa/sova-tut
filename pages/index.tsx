import { Center, Text } from '@chakra-ui/react'
import { Welcome } from '@components/templates'
import { Cart } from '@components/templates/home/Cart'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Center w={'full'} color={'brand.darkBrown'} fontSize={'7xl'} flexDirection={'column'}>
      <Text fontSize={'4xl'} color={'brand.lightBrown'}></Text>
      <Welcome />
      <Cart />
    </Center>
  )
}

export default Home
