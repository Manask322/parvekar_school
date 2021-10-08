import * as React from "react";
import {useRouter} from 'next/router'
import Head from 'next/head'

const MyComp = () => {
    const router = useRouter();

  React.useEffect(() => {
    // window is accessible here.
    if(!router.isReady) return;
        const query = router.query;

    window.addEventListener("message", function (event) {        
        if (event.data.message === "requestResult") {
          console.log(event.data);
          console.log(query);
          event.source.postMessage({"message": "deliverResult", result: query }, "*");
        }
      });
    }, [router.isReady]);

  return (<>
    <Head>
      <script></script>
    </Head>
  </>)
}

export default  MyComp;