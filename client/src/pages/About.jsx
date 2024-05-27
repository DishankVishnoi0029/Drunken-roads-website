import React from "react";
import aboutImg from "../assets/images/about_img.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-2xl rounded-xl shadow-xl p-3 flex flex-col gap-3">
        <h1 className="text-4xl text-center font-semibold">About</h1>
        <div className="w-max flex flex-col">
          <img src={aboutImg} className="w-40 h-40" alt="Image" />
          <h1 className="text-xl font-semibold text-center">Dishank Vishnoi</h1>
        </div>
        <ul className="list-disc w-max mx-5">
          <li className="hover:underline hover:text-blue-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://github.com/dishankbishnoi"
              target="_blank"
            >
              Git-Hub <FaExternalLinkAlt />
            </a>
          </li>
          <li className="hover:underline hover:text-pink-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://www.instagram.com/gfxdishu/"
              target="_blank"
            >
              Instagram <FaExternalLinkAlt />
            </a>
          </li>
        </ul>
        <p>
          Tech enthusiast and creative designer who loves traveling and making videos. His passion for technology and storytelling shines through his engaging travel content and innovative digital designs.
        </p>
      </div>
    </div>
  );
};

export default About;
