import Layout from '../components/Layout';
import { MarsPhotos } from '../lib/nasa';
import MarsCard from '../components/MarsCard';

export default function Mars({ marsPhotos }) {
  return (
    <Layout>
      <h1 className="text-5xl text-white text-center">Today Mars Photos</h1>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
        {marsPhotos.map((data) => (
          <MarsCard key={data.id} data={data} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const marsPhotos = await MarsPhotos();

  return {
    props: {
      marsPhotos,
    },
  };
}
