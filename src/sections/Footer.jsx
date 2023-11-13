import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

export default function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between  items-start gap-20  flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>
          <p className="text-white  mt-6 text-base leading-7 sm:max-w-sm">
            get shoes ready for the new term at your nearest Nike stoer. find
            your perfect size in the nike store .Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className={`flex justify-center items-center w-12 h-12 bg-white rounded-full ${`hover:${icon.color}`}`}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-medium leading-normal mb-6  text-xl">
                {section.title}
              </h4>
              <ul className="text-white ">
                {section.links.map((link) => (
                  <li
                    key={crypto.randomUUID()}
                    className="  text-base leading-normal hover:text-red-500 hover:cursor-pointer"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white mt-24  max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer ">
          <img
            src={copyrightSign}
            alt="copyrightsign"
            width={20}
            height={20}
            className="rounded-full m-0s"
          />
          <p>Copyright all right reserved.</p>
        </div>
        <p className="cursor-pointer">terms and conditions</p>
      </div>
    </footer>
  );
}
