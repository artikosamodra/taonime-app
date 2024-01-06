// import Image from "next/image";
import Link from "next/link";
import AnimeList from "./components/AnimeList";

const Home = async () => {
  //fetch API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`
  );
  const anime = await response.json();
  console.log(anime);

  // HTML
  return (
    <main>
      <div className="md:mt-20 mt-24 md:px-10 px-5 py-4 flex justify-between">
        <h1 className="font-bold md:text-xl text-md">Popular Anime</h1>
        <Link
          href="/"
          className="font-light underline md:text-lg text-md text-blue-500"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="md:px-10 px-5">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          {anime.data.map((data) => {
            // console.log(data.title);
            return (
              //key mal id = id from my anime list
              <div key={data.mal_id} className="shadow-xl">
                <AnimeList
                  title={data.title}
                  images={data.images.webp.image_url}
                  id={data.mal_id}
                />
              </div>
            ); //get title & image
          })}
        </div>
      </div>
      <div className=" md:p-4 p-2 sm:mx-10 mx-3 md:p-4 p-2"></div>
    </main>
  );
};
export default Home;
