import Image from 'next/image';

export default function BlogCard({ data }) {
  return (
    <article className="transition duration-300 hover:scale-105">
      <div
        key={data.rover.name}
        className="flex flex-col rounded-xl shadow-lg overflow-hidden"
      >
        <div className="flex-shrink-0">
          <Image
            src={data.img_src}
            className="h-64 w-full object-fit"
            alt={`Rover Photos ID: ${data.id}`}
            height={250}
            width={500}
            layout="responsive"
          />
        </div>
        <div className="flex-1 bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between">
          <div className="flex-1">
            <span className="block mt-2">
              <span className="text-xs font-medium text-gray-600">
                {data.earth_date}
              </span>
            </span>
            <div className="block mt-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {data.rover.name}
              </h3>

              <div className="block mt-2">
                <p className="text-sm text-gray-600">{`Photo by ${data.rover.name} of the nasa with the ${data.camera.full_name}. `}</p>
              </div>

              <span className="block mt-2 space-x-4">
                <span className="bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg">
                  #{data.rover.name}
                </span>
                <span className="bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg">
                  #{data.camera.full_name}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
