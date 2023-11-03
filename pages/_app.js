import Head from "next/head";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Blinker:wght@400;600;700;800&family=Montserrat:wght@500;700&display=swap`}
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NTXJXL39');`,
          }}
        />
      </Head>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NTXJXL39"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
