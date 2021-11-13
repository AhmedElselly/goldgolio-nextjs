import App from 'next/app';
import Head from 'next/head';
import {Fragment, useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import '../styles.css';

function MyApp({ Component, pageProps }) {

  return (
    <Fragment>
      <Head>
        <title>Gold Golio</title>
      </Head>
      <Navbar/>
  		<Component {...pageProps} />
    </Fragment>
	)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp