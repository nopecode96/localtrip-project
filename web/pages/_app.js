   // pages/_app.js
   import '../styles/globals.css';
   import 'react-datepicker/dist/react-datepicker.css'
   import CookieConsentBanner from '../components/CookieConsentBanner';

   function MyApp({ Component, pageProps }) {
      return (
        <>
          <Component {...pageProps} />
          <CookieConsentBanner />
        </>
      );
   }

   export default MyApp;