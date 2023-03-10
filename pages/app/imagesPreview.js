import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

import image1 from "../../public/image.png";
import image2 from "../../public/image.png";
import image3 from "../../public/image.png";
import image4 from "../../public/image.png";
import image5 from "../../public/image.png";

const slides = [image1, image2, image3, image4, image5];

function NextJsImage(...[image, , rect]) {
  const width = Math.round(
    Math.min(rect.width, (rect.height / image.height) * image.width)
  );
  const height = Math.round(
    Math.min(rect.height, (rect.width / image.width) * image.height)
  );

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={image}
        loading="eager"
        placeholder="blur"
        draggable={false}
        sizes={
          typeof window !== "undefined"
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = React.useState(false);

  return (
    <main className="flex flex-col items-center text-center p-6 gap-6">
      <h1 className="text-2xl font-bold">
        Yet Another React Lightbox | Next.js
      </h1>

      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => setOpen(true)}
      >
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </main>
  );
}
