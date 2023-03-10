import { ThemeProvider } from 'next-theme';
import Navbar from '../components/Navbar';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
