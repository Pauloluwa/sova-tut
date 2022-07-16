import '../styles/globals.css'
import { Layout } from '@components/Layout'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
