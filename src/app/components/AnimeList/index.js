import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <main>
      <Link href={`/${id}`} className="cursor-pointer">
        <Image src={images} alt="..." width={400} height={400} />
        <h3 className="font-bold lg:text-lg md:text-md text-sm p-3">{title}</h3>
      </Link>
    </main>
  );
};

export default AnimeList;
