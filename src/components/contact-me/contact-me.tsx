import { AtSign, Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export function ContactMe() {
  return (
    <div className="grid place-items-center py-16">
      <h2 className="text-5xl text">Contanto</h2>
      {/* <form className="grid py-12">
        <label>
          Nome
          <input type="text" />
        </label>
        <label>
          Assunto
          <input type="text" />
        </label>
      </form> */}
      <div className="flex gap-4 py-12">
        <a
          href="https://www.linkedin.com/in/gabrigomes/"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer border-2 p-2 rounded-sm"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/gomessgbr"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer border-2 p-2 rounded-sm"
        >
          <Github />
        </a>
        <a
          href="mailto:gabrielgomes98@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer border-2 p-2 rounded-sm"
        >
          <AtSign />
        </a>
      </div>
    </div>
  );
}
