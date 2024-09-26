import "@/index.css";

// import { AppProvider } from "@/Components/appContext";
import Template from "@/Components/Template/Template";
import Head from "next/head";



 function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        {/* Viewport Meta Tag for Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
   
      
          <Template>
            <Component {...pageProps} />
          </Template>
  
     
    </>
  );
}

export default App;