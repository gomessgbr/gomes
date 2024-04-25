import Image from "next/image";

import reactLogo from "../../assets/react-icon.svg";
import cssIcon from "../../assets/css-icon.png";
import dockerIcon from "../../assets/docker-icon.png";
import gitIcon from "../../assets/git-icon.png";
import githubIcon from "../../assets/github-icon.png";
import gitlabIcon from "../../assets/gitlabe-icon.png";
import htmlIcon from "../../assets/html-icon.webp";
import javaIcon from "../../assets/java-icon.png";
import jsIcon from "../../assets/js-icon.png";
import mongoDBIcon from "../../assets/mongodb-icon.png";
import mysqlIcon from "../../assets/mysql-icon.png";
import nextjsIcon from "../../assets/nextjs-icon.png";
import nodejsIcon from "../../assets/nodejs-icon.png";
import postgreslqIcon from "../../assets/postgresql-icon.png";
import prismaIcon from "../../assets/prismaIcon.svg";
import reactNativeIcon from "../../assets/react.png";
import reduxIcon from "../../assets/redux-logo.png";
import sassIcon from "../../assets/sass-icon.png";
import springIcon from "../../assets/spring-icon.png";
import styledComponentsIcon from "../../assets/styled-components-icon.png";
import tailwindIcon from "../../assets/tailwind-icon.png";
import typescriptIcon from "../../assets/typescript-logo.png";
import zustandIcon from "../../assets/zustand-logo.png";
import tanStackIcon from "../../assets/tanstack-icon.png";

export function ExpertisesSession() {
  return (
    <div className="grid place-items-center gap-4 py-12 px-12">
      <h2 className="text-5xl text">Habilidades</h2>
      <div className="grid grid-flow-col grid-rows-4 place-items-center gap-8">
        <div>
          <Image alt="" src={reactLogo} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={cssIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={dockerIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={gitIcon} width={100} height={100} />
        </div>
        <div className="dark:bg-white rounded-full">
          <Image alt="" src={githubIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={gitlabIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={htmlIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={javaIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={jsIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={mongoDBIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={mysqlIcon} width={100} height={100} />
        </div>
        <div className="dark:bg-white rounded-full">
          <Image alt="" src={nextjsIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={nodejsIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={postgreslqIcon} width={100} height={100} />
        </div>
        <div className="dark:bg-white rounded">
          <Image alt="" src={prismaIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={reactNativeIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={reduxIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={sassIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={springIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={styledComponentsIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={tailwindIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={typescriptIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={zustandIcon} width={100} height={100} />
        </div>
        <div>
          <Image alt="" src={tanStackIcon} width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
