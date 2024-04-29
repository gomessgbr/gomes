import Image from "next/image";

import projectCoffee from "../../assets/projects/image.png";

export function ProjectsSession() {
  return (
    <div className="grid place-items-center">
      <h2 className="text-5xl text"> Projetos</h2>
      <div>
        <Image alt="" src={projectCoffee} width={400} height={400} />
        <span>Coffee Delivery</span>
        <p>E-Commerce de venda de café</p>
      </div>
    </div>
  );
}
