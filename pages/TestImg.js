import React, { useState } from "react";
const images = [
  {
    id: 1,
    name: "01-3.webp",
    url: "",
  },
  {
    id: 2,
    name: "02-2.webp",
    url: "",
  },
  {
    id: 3,
    name: "02-3.webp",
    url: "",
  },
  {
    id: 4,
    name: "01-3.webp",
    url: "",
  },
  {
    id: 5,
    name: "02-2.webp",
    url: "",
  },
  {
    id: 6,
    name: "02-3.webp",
    url: "",
  },
  {
    id: 7,
    name: "01-3.webp",
    url: "",
  },
  {
    id: 8,
    name: "02-2.webp",
    url: "",
  },
];
const Test = () => {
  const [width, setWidth] = useState("w-1");
  const [img, setImg] = useState("01-3.webp");
  return (
    <div>
      <div>
        <img
          onMouseEnter={() => setWidth("w-0")}
          className="  fixed w-full"
          src={`../images/${img}`}
          alt=""
        />
      </div>
      <div>
        <div
          onMouseEnter={() => setWidth("w-1/5")}
          className="absolute top-0 right-3/4 h-full w-1 bg-gray-600 opacity-100  "
        ></div>

        <div
          onMouseEnter={() => setWidth("w-1/5")}
          className="absolute top-0 right-3/4 h-full w-1/12 bg-gray-900 opacity-0  "
        ></div>

        <div
          class
          className={`absolute border-red-800 top-0 right-3/4 ${width} `}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={`../images/${image.name}`}
              alt=""
              onMouseEnter={() => setImg(image.name)}
              className="w-3/5 shadow-lg my-1 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
