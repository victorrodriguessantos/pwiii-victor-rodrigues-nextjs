import Head from 'next/head';
import Navbar from './components/Navbar';
import Principal from './components/Principal';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Principal />
    </>
  );
}
