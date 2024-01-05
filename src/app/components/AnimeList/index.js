import Image from "next/image";

const AnimeList = ({ title, images }) => {
  return (
    <main>
      <div className="bg-amber-100">
        <Image src={images} alt="..." width={600} height={400} />
        <h3>{title}</h3>
      </div>
    </main>
  );
};

export default AnimeList;
