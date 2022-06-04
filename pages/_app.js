import '../styles/globals.scss'
import Layout from '../components/layout'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dev Challenge</title>
        <meta name="description" content="DYODE Dev Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
