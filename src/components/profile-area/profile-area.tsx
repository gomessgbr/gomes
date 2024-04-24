import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";

import profileImage from "../../assets/profileImage.png";

export function ProfileArea() {
  return (
    <div className="grid gap-8 p-8 grid-cols-1 grid-rows-1 sm:grid-cols-2">
      <div className="grid grid-cols-1 grid-rows-auto gap-y-4">
        <div className="flex flex-col gap-2 ">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Salve, eu sou o Gabriel Gomes
          </h1>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Desenvolvedor Front-End/FullStack
          </h3>
        </div>
        <div className="flex gap-4 ">
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
      <div>
        <Image
          alt="profile image"
          width={400}
          height={400}
          src={profileImage}
        />
      </div>
    </div>
  );
}
