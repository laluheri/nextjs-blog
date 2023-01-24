import React from "react";

const EbookSection = () => {
  return (
    <div className="mt-20 mx-auto max-w-4xl">
      <div className="text-center text-gray-800 text-3xl mb-5">
        MAU EBOOK GRATIS?
      </div>
      <div className="md:flex">
        <div className="w-full md:w-1/3 p-2">
          <div>
            <img
              src="/images/7-jurus-baru-javascript.jpg"
              alt="7-jurus-baru-javascript"
            />
          </div>
          <div className="mt-4 text-xl text-center">
            7 Jurus Baru Javascript
          </div>
          <div className="mx-auto text-center">
            <a
              href="/download-7-jurus-javascript"
              className="bg-red-600 text-white px-4 py-1 mt-2 inline-block"
            >
              Download
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div>
            <img
              src="/images/reactjs-untuk-jquery-developer-banner-1.jpg"
              alt="reactjs-untuk-jquery-developer"
              className="mx-auto"
            />
          </div>
          <div className="mt-4 text-xl text-center">
            ReactJS untuk jQuery Developer
          </div>
          <div className="mx-auto text-center">
            <a
              href="/download-reactjs-untuk-jquery"
              className="bg-red-600 text-white px-4 py-1 mt-2 inline-block"
            >
              Download
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div>
            <img src="/images/7-jurus-baru-javascript.jpg" />
          </div>
          <div className="mt-4 text-xl text-center">
            Kompilasi Mini Serial PHP OOP
          </div>
          <div className="mx-auto text-center">
            <a
              href="/download-php-oop"
              className="bg-red-600 text-white px-4 py-1 mt-2 inline-block"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookSection;
