import '@/styles/globals.css'
import Example from '../../components/Navbar'
import Footer from '../../components/Footer';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Example />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
