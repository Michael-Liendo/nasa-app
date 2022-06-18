export async function AstronomyPictureoDay() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`,
  );

  const data = await res.json();

  return data;
}

export async function MarsPhotos() {
  const date = new Date();

  const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const res = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${process.env.API_KEY}&earth_date=${today}`,
  );

  const data = await res.json();

  return data.photos;
}
