import Progress from "nextjs-progressbar";
import Topbar from "../components/Topbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Progress />
      <Topbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
