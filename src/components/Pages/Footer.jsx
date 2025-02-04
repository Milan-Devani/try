import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaSortDown } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-16 pb-24">
      {/* Email Section */}
      <div className="text-center max-w-lg mx-auto w-full mb-6">
        <p className="font-SegoeUIRegular text-sm md:text-base leading-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <input
            type="email"
            className="p-3 rounded bg-[#161616b3] border border-[#808080b3] w-full md:w-[55%] sm:w-[55%] focus:outline-none text-black"
            placeholder="Email address"
          />
          <button className="flex items-center justify-center gap-2 bg-[#e50914] text-lg md:text-xl font-medium px-6 py-3 rounded hover:bg-red-700">
            Get Started
            <RiArrowRightSLine className="w-6 md:w-8 h-6 md:h-8" />
          </button>
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-12">
        <p className="text-[#ffffffb3] text-center text-sm">
          Questions? Call <span className="underline">000-800-919-1694</span>
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 text-sm mb-6">
        {[
          ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
          ["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"],
          [
            "Account",
            "Ways to Watch",
            "Corporate Information",
            "Only on Netflix",
          ],
          ["Media Centre", "Terms of Use", "Contact Us"],
        ].map((column, colIndex) => (
          <div
            key={colIndex}
            className={`flex flex-col space-y-2 text-[#ffffffb3] ${
              (colIndex === 2, 3 ? "mt-[30px]" : "")
            }`}
          >
            {column.map((item, itemIndex) => (
              <li key={itemIndex} className="list-none hover:underline">
                <Link to="#">{item}</Link>
              </li>
            ))}
          </div>
        ))}
      </div>

      {/* Language and Netflix Info */}
      <div className="text-center mt-12">
        <div className="relative px-2 py-1 w-[60%] sm:w-40 rounded border border-[#545454] flex items-center font-NetflixSans_Md">
          <IoLanguageSharp className="text-white" />
          <select className="text-white appearance-none bg-transparent focus:outline-none pl-2 pr-6 w-full font-NetflixSans_Md">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <FaSortDown className="absolute right-2 text-white pointer-events-none" />
        </div>
        <p className="mt-8 text-gray-400 text-left">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
