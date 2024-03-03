import React from "react";
import { FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/FazilAhamed-KR">
              <FaGithub />
            </a>
          </span>

          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/fazil-ahamed-487830246/">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <SiCss3 />
          </span>
          <span className="bannerIcon">
            <SiHtml5 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
