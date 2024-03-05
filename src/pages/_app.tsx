import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../styles/globals.css';

import SiteDock from '@components/Dock/Dock';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const url = `https://jeffen.me${router.route}`;
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('light' as any);

  useEffect(() => {
    const handleRouteChange = () => setLoading(true);
    const handleRouteComplete = () => setLoading(false);
    const handleRouteError = () => setLoading(false);

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('routeChangeError', handleRouteError);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('routeChangeError', handleRouteError);
    };
  }, []);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);
  return (
    <>
      <Head>
        <title>Jeffen Chen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Theme appearance={theme}>
        <AnimatePresence initial={false} mode="wait">
          <Component {...pageProps} canonical={url} key={url} />
        </AnimatePresence>
        <SiteDock />
      </Theme>
    </>
  );
}

export default MyApp;