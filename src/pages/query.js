import { useState } from 'react';
import Layout from '../components/Layout';
import QueryCard from '../components/QueryCard';
import { QueryAPhotos } from '../lib/nasa';

export default function NasaImages({ data }) {
  const [inputValue, setInputValue] = useState('Earth');

  const getInputValue = (event) => {
    const userValue = event.target.value;

    setInputValue(userValue);
  };
  return (
    <Layout>
      <h1 className="text-5xl my-5 text-white text-center">Find a photos</h1>
      <div className="flex">
        <input
          onChange={getInputValue}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={inputValue}
          placeholder="Find something"
          required
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Find
        </button>
      </div>

      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
        {data.map((res) => {
          return <QueryCard key={res} data={res} />;
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await QueryAPhotos('Earth');
  return {
    props: { data },
  };
}
