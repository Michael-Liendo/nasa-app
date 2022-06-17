import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ title, children }) {
  function getTitle() {
    if (title) {
      return title;
    } else {
      return 'Nasa App';
    }
  }

  return (
    <div>
      <Head>
        <title>{getTitle()}</title>
      </Head>

      <Header />
      <main className="my-20 mx-10 min-h-screen lg:mx-28">{children}</main>
      <Footer />
    </div>
  );
}
