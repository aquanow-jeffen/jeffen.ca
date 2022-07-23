import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import createEmotionCache from "../createEmotionCache";
import "../styles/globals.css";

import WebsiteDock from "@components/WebsiteDock";
import { ThemeContext } from "src/themeContext";

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
  const url = `https://jeffen.me${router.route}`;
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");

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

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Jeffen Chen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <CacheProvider value={emotionCache}>
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} canonical={url} key={url} />
          </AnimatePresence>
          <WebsiteDock />
        </CacheProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
