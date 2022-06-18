import Image from 'next/image';
import Layout from '../components/Layout';
import { AstronomyPictureoDay } from '../lib/nasa';

export default function Home({ APOD }) {
  return (
    <Layout>
      <div className="text-white text-center">
        <h1 className="text-6xl my-5">{APOD.title}</h1>
        <p className="my-5">{APOD.explanation}</p>
        <Image width={500} height={500} alt={APOD.title} src={APOD.url} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const APOD = await AstronomyPictureoDay();

  return {
    props: {
      APOD,
    },
  };
}
