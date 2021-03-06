import Head from 'next/head';

import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/instagram.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Feed */}

      {/* Modal */}
    </div>
  );
}
