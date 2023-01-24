import { useState } from "react";

function YouTubeLink() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a
      href="https://www.youtube.com"
      className={`bg-red-500 rounded flex text-white px-2 py-1 ${
        isHovering ? "hover:bg-red-600" : ""
      }`}
      target="_blank"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7ZM2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM10 9L14 12L10 15V9Z"
          fill="currentColor"
        />
      </svg>
      <span>Youtube</span>
    </a>
  );
}

export default YouTubeLink;