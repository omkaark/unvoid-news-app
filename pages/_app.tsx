import "../styles/globals.css";
import { Provider, useSession } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  const [session, loading] = useSession();
  return (
    <Provider session={pageProps.session}>
      <Component session={session} loading={loading} {...pageProps} />
    </Provider>
  );
}

export default MyApp;
