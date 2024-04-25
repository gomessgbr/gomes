import Link from "next/link";
import Image from "next/image";

import { AboutMe } from "../about-me/about-me";

import profileImage from "../../assets/profileImage.png";

export function ProfileArea() {
  return (
    <div className=" flex flex-wrap dark:bg-blue-800 bg-blue-300 justify-center items-center">
      <div className="flex flex-wrap gap-2 px-8 py-4  items-center">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
            Salve, eu sou o Gabriel Gomes
          </h1>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
            Desenvolvedor Front-End/FullStack
          </h3>
          <div className="flex gap-4 pt-8">
            <Link
              href="/files/GabrielGomesCV24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" inline-flex items-center justify-center text-lg whitespace-nowrap h-11 rounded-md px-8 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Baixar CV
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center whitespace-nowrap text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-400 text-secondary-foreground hover:bg-slate-400/90 h-11 rounded-md px-8"
            >
              Me Contrate
            </Link>
          </div>
        </div>
        <Image
          alt="profile image"
          width={420}
          height={420}
          src={profileImage}
          quality={100}
          priority={true}
        />
      </div>

      <AboutMe />
    </div>
  );
}
