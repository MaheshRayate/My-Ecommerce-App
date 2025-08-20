import React from "react";
import footerData from "./footerData";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdCall, MdOutlineMail } from "react-icons/md";
import { IoHelp } from "react-icons/io5";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className=" text-white grid grid-cols-2 md:gap-y-2 lg:grid-cols-4 px-10 py-5 justify-items-center">
        {footerData.map((item) => {
          const { id, name, list } = item;
          return (
            <div key={id} className="w-40">
              <h1 className="text-xl mb-2">{name}</h1>
              <div>
                {list.map((url) => {
                  const { id, label, href } = url;
                  return (
                    <a className="block" key={id} href={href}>
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-100 w-9/10 mx-auto flex flex-col items-center text-center py-3 justify-center">
        <div className="flex w-2/10 justify-evenly">
          <a href="">
            <FaInstagram className="size-10 text-white" />
          </a>
          <a href="">
            <FaFacebook className="size-10 text-white" />
          </a>

          <a href="">
            <FaXTwitter className="size-10 text-white" />
          </a>
        </div>

        <div className="flex flex-col gap-y-1 md:flex-row text-white gap-x-2">
          <div>
            <div className="flex items-center gap-2">
              <MdCall className="size-10  border border-gray-100 p-2 rounded-full" />
              <div>
                <h1 className="lg:text-xl">1800-2004-3405</h1>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MdOutlineMail className="size-10  border border-gray-100 p-2 rounded-full" />
            <div>
              <h1 className="lg:text-xl">thetrendystore@gmail.com</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <IoHelp className="size-10  border border-gray-100 p-2 rounded-full" />
            <div>
              <h1 className="lg:text-xl">help.thetrendystore.com</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xl py-2 text-white flex justify-center">
        All Rights Reserved © {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
