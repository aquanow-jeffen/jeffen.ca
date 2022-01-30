import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import createEmotionCache from "../createEmotionCache";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setLoading(true);
    const handleRouteComplete = () => setLoading(false);
    const handleRouteError = () => setLoading(false);

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CacheProvider value={emotionCache}>
        <Component {...pageProps} />
      </CacheProvider>
    </>
  );
}

export default MyApp;
