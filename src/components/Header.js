import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-slate-900">
      <div className="py-3 flex justify-between">
        <h2 className="ml-4 text-xl font-mono font-black text-white lg:ml-16 sm:text-4xl">
          Nasa App
        </h2>
        <div className="mr-16">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
