import { Navbar } from './templates/home/Navbar'
import Footer from './templates/home/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export { Layout }
