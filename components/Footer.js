import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-5 pb-5 mt-20 text-gray-200 px-3">
      <div className="max-w-5xl mx-auto flex flex-col">
        <div className="text-white">
          <div className="text-xl font-bold">EXPLORE &gt; LEARN &gt; GROW</div>
          <p className="text-gray-200 max-w-sm text-sm">
            Saya senang membedah topik teknologi{" "}
            <b>sebagai alternatif kehidupan yang lebih mudah</b>
          </p>
        </div>

        <div className="font-bold text-white mb-1">JADI TEMAN SAYA</div>
        <div className="md:inline-flex w-full items-start">
          <a
            href="#"
            target="_blank"
            className="mr-2 bg-blue-600 hover:bg-blue-700 px-2 rounded text-xs font-bold"
          >
            Facebook
          </a>
          <a
            href="#"
            target="_blank"
            className="mr-2 bg-blue-500 hover:bg-blue-600 px-2 rounded text-xs font-bold"
          >
            Linkedin
          </a>
          <a
            href="#"
            target="_blank"
            className="mr-2 bg-blue-400 hover:
bg-blue-500 px-2 rounded text-xs font-bold"
          >
            Twitter
          </a>
          <a
            href="#"
            target="_blank"
            className="mr-2 bg-pink-600 hover:bg-pink-700 px-2 rounded text-xs font-bold"
          >
            Instagram
          </a>
        </div>
        <div className="text-small mt-10">© 2023 All Right Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
