import Link from "next/link";
import React, { useState } from "react";
import YouTubeLink from "./YouTubeLink";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="flex flex-col md:flex-row items-center px-5 lg:px-0 max-w-5xl mx-auto my-4 mt-6">
      <h2 className="text-4xl text-red-500">
        <Link href="/">
          Bang{""}
          <b className="text-white bg-red-500 rounded-md">koding</b>
        </Link>
      </h2>
      <nav className="md:ml-auto space-x-5 flex items-center">
        <Link
          href="/"
          className={`${isActive ? "text-red-500" : ""}`}
          onClick={() => setIsActive(true)}
        >
          Home
        </Link>
        <Link
          href="/blog"
          className={`${!isActive ? "text-red-500" : ""}`}
          onClick={() => setIsActive(false)}
        >
          Tulisan
        </Link>
        <YouTubeLink />
      </nav>
    </header>
  );
}
