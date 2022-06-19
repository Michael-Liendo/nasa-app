import Image from 'next/image';

export default function QueryCard({ data }) {
  let src;

  if (data.links) {
    src = data.links[0].href;
  } else {
    src = 'https://images-assets.nasa.gov/image/PIA00122/PIA00122~thumb.jpg';
  }

  return (
    <article className="transition duration-300 hover:scale-105">
      <div className="flex flex-col rounded-xl shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <Image
            src={src}
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
                {data.data[0].date_created}
              </span>
            </span>
            <div className="block mt-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {data.data[0].title}
              </h3>
            </div>
            <div className="block mt-2">
              <p className="text-sm text-gray-600">
                {data.data[0].description}
              </p>
            </div>

            <span className="block mt-2 space-x-4">
              {data.data[0]?.keywords
                ? data.data[0].keywords.map((items) => (
                    <span
                      key={items}
                      className="bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg"
                    >
                      #{items}
                    </span>
                  ))
                : null}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
