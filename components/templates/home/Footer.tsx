import {
  Box,
  Text,
  Image,
  VStack,
  InputGroup,
  Input,
  Button,
  HStack,
  Icon,
  Stack
} from '@chakra-ui/react'
import { FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
      <Box bg={'#EDE8E7'}>
        <Stack direction="column" pt={'54px'} pb={'110px'} px={'195px'}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            marginBottom={'65px'}>
            <Image
              src="/images/brand-logo.png"
              alt="brand-logo"
              width={'100px'}
            />
            <VStack
              display={'flex'}
              alignItems={'start'}
              justifyContent={'space-between'}>
              <Text
                fontFamily={'libre Bodoni'}
                fontWeight={'500'}
                fontSize={'20px'}
                lineHeight={'25px'}
                color={'#311C1C'}>
                To the buyer
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                Payment and delivery
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                {' '}
                Exchange and Return
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                Privacy and Policy
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                Shops
              </Text>
            </VStack>

            <VStack display={'flex'} alignItems={'start'}>
              <Text
                fontFamily={'libre Bodoni'}
                fontWeight={'500'}
                fontSize={'20px'}
                lineHeight={'25px'}
                color={'#311C1C'}>
                About
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                about us
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                SOVA CLUB
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                Contact Offers
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                Contact
              </Text>
            </VStack>

            <VStack display={'flex'} alignItems={'start'}>
              <Text
                fontFamily={'libre Bodoni'}
                fontWeight={'500'}
                fontSize={'20px'}
                lineHeight={'25px'}
                color={'#311C1C'}>
                Catalog
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                Jewelry
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                {' '}
                Collections
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                %Outlet
              </Text>
            </VStack>

            <VStack display={'flex'} alignItems={'start'}>
              <Text
                fontFamily={'libre Bodoni'}
                fontWeight={'500'}
                fontSize={'20px'}
                lineHeight={'25px'}
                color={'#311C1C'}>
                Work Time
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                Mon-Th с 9:00 до 20:00
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                Fri з 9:00 до 19:00
              </Text>
              <Text
                fontFamily={'mulish'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'22px'}>
                Sat с 9:00 до 17:00
              </Text>
            </VStack>

            <VStack display={'flex'} alignItems={'start'} gap={'26px'}>
              <Text
                fontFamily={'libre Bodoni'}
                fontWeight={'500'}
                fontSize={'20px'}
                lineHeight={'25px'}
                color={'#311c1c'}>
                Subscribe our Newsletter
              </Text>

              <InputGroup size="md" border={'1px solid #311c1c'}>
                <Input
                  placeholder="Your email"
                  _placeholder={{ color: '#B5ABAA' }}
                  padding={'16px'}
                  borderRadius={'0'}
                  fontSize={'12px'}
                  fontFamily={'mulish'}
                />
                <Button
                  padding="17px 24px"
                  backgroundColor={'#311C1C'}
                  color={'#ede8e7'}
                  fontSize={'10px'}
                  borderRadius={'0'}
                  outline={'#311c1c'}
                  _hover={{ bg: '#B5abaa', color: '#311c1c' }}>
                  {' '}
                  Subscribe{' '}
                </Button>
              </InputGroup>
              <HStack gap={'16px'}>
                <Box
                  w={'32px'}
                  h={'32px'}
                  borderRadius={'50%'}
                  fontSize={'16px'}
                  px={'12px'}
                  py={'8px'}
                  border={'1px solid #311c1c'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  _hover={{ color: '#B5abaa', bg: '#311c1c' }}
                  transition={'all 0.3s ease-in'}>
                  <Icon
                    cursor={'pointer'}
                    _hover={{ color: '#B5abaa', bg: '#311c1c' }}
                    as={FiFacebook}
                  />
                </Box>

                <Box
                  w={'32px'}
                  h={'32px'}
                  borderRadius={'50%'}
                  fontSize={'16px'}
                  px={'12px'}
                  py={'8px'}
                  border={'1px solid #311c1c'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  _hover={{ color: '#B5abaa', bg: '#311c1c' }}
                  transition={'all 0.3s ease-in'}>
                  <Icon
                    cursor={'pointer'}
                    _hover={{ color: '#B5abaa', bg: '#311c1c' }}
                    as={FiInstagram}
                  />
                </Box>
                <Box
                  w={'32px'}
                  h={'32px'}
                  borderRadius={'50%'}
                  fontSize={'16px'}
                  px={'12px'}
                  py={'8px'}
                  border={'1px solid #311c1c'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  _hover={{ color: '#B5abaa', bg: '#311c1c' }}
                  transition={'all 0.3s ease-in'}>
                  <Icon
                    cursor={'pointer'}
                    _hover={{ color: '#B5abaa', bg: '#311c1c' }}
                    as={FiLinkedin}
                  />
                </Box>
              </HStack>
            </VStack>
          </Box>

          <Box w={'full'} h={'1px'} bg={'#B5ABAA'} />

          <Text color={'#B5ABAA'} fontSize={'12px'}>
            &copy; 2022 watches, all rights reserved...
          </Text>
        </Stack>
      </Box>
    </>
  )
}
export default Footer
