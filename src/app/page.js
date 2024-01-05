// import Image from "next/image";
import AnimeList from "./components/AnimeList";
import SearchAnime from "./components/SearchAnime";

const Home = async () => {
  //fetch API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();
  console.log(anime);

  // HTML
  return (
    <main>
      <div>
        <h1>Popular Anime</h1>
        {anime.data.map(data => {
          // console.log(data.title);
          return <AnimeList title={data.title} images={data.images.webp.image_url} /> //get title & image
        })}
      </div>
    </main>
  );
};

export default Home;

// export default function Home() {
//   return (
//     <div>
//       <h1>PROJECT NEXT JS</h1>
//     </div>
//   )
// }
