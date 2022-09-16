import Footer from 'components/common/Footer'
import Layout from 'components/common/Layout'
import Navbar from 'components/common/Navbar'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Layout/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
