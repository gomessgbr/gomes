import Image from "next/image";

import reactLogo from "../../assets/icons/react-icon.svg";
import cssIcon from "../../assets/icons/css-icon.png";
import dockerIcon from "../../assets/icons/docker-icon.png";
import gitIcon from "../../assets/icons/git-icon.png";
import githubIcon from "../../assets/icons/github-icon.png";
import gitlabIcon from "../../assets/icons/gitlabe-icon.png";
import htmlIcon from "../../assets/icons/html-icon.webp";
import javaIcon from "../../assets/icons/java-icon.png";
import jsIcon from "../../assets/icons/js-icon.png";
import mongoDBIcon from "../../assets/icons/mongodb-icon.png";
import mysqlIcon from "../../assets/icons/mysql-icon.png";
import nextjsIcon from "../../assets/icons/nextjs-icon.png";
import nodejsIcon from "../../assets/icons/nodejs-icon.png";
import postgreslqIcon from "../../assets/icons/postgresql-icon.png";
import prismaIcon from "../../assets/icons/prismaIcon.svg";
import reactNativeIcon from "../../assets/icons/react.png";
import reduxIcon from "../../assets/icons/redux-logo.png";
import sassIcon from "../../assets/icons/sass-icon.png";
import springIcon from "../../assets/icons/spring-icon.png";
import styledComponentsIcon from "../../assets/icons/styled-components-icon.png";
import tailwindIcon from "../../assets/icons/tailwind-icon.png";
import typescriptIcon from "../../assets/icons/typescript-logo.png";
import zustandIcon from "../../assets/icons/zustand-logo.png";
import tanStackIcon from "../../assets/icons/tanstack-icon.png";

export function ExpertisesSession() {
  return (
    <div className="grid place-items-center gap-8 py-12 px-12 border-">
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
