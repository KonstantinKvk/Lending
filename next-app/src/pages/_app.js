import SSRProvider from 'react-bootstrap/SSRProvider';
import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/animation.css'
import '../styles/kvkBlock.css'
import 'rsuite/dist/rsuite.min.css'
// import 'react-phone-input-2/lib/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}


export default MyApp