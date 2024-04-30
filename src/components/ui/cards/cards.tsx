import Image from "next/image";
import { ITagsProps, Tags } from "../tags/tags";

interface ICardsProps {
  name: string;
  link: string;
  image: string;
  description: string;
  tags?: Array<ITagsProps>;
}

export function Cards({ image, link, name, description, tags }: ICardsProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        alt=""
        src={image}
        width={400}
        height={400}
        className="rounded-t-lg"
      />
      <div className="px-6 py-4">
        <span className="font-bold text-xl mb-2">{name}</span>
        <p className=" text-base">{description}</p>
      </div>
      {tags && (
        <div className="px-6 pt-4 pb-2">
          {tags.map(({ titleTag }, index) => (
            <Tags key={index} titleTag={titleTag} />
          ))}
        </div>
      )}
      <div className="p-6 pt-0 grid gap-2 grid-cols-2">
        <a
          className="align-middle rounded-sm select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6  bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Projeto
        </a>
        <a
          href="#"
          className="align-middle rounded-sm select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
