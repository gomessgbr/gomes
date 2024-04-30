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
        <Button type="button" size="icon">
          <Linkedin />
        </Button>
        <Button type="button" size="icon">
          <Github />
        </Button>
        <Button type="button" size="icon">
          <AtSign />
        </Button>
      </div>
    </div>
  );
}
