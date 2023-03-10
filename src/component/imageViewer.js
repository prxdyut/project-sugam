import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageComponent from "next/image";

function NextJsImage(...[image, , rect]) {
  const getMeta = (url, cb) => {
    const img = new Image();
    img.onload = () => cb(null, img);
    img.onerror = (err) => cb(err);
    img.src = url;
  };

  // Use like:
  getMeta(image.src, (err, img) => {
    const width = Math.round(
      Math.min(rect.width, (rect.height / img.naturalHeight) * img.naturalWidth)
    );
    const height = Math.round(
      Math.min(rect.height, (rect.width / img.naturalWidth) * img.naturalHeight)
    );console.log('yeah')

    return (
      <div style={{ position: "relative", width, height }}>
        {console.log("0000123456789")}
        <ImageComponent
          fill
          alt=""
          src={image.src}
          loading="eager"
          // layout="fill"
          // objectFit="contain"
          // placeholder="blur"
          draggable={false}
          sizes={
            typeof window !== "undefined"
              ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
              : `${width}px`
          }
        />
      </div>
    );
  });
}

export default function Home({ images }) {
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
        slides={images}
        render={{ slide: NextJsImage }}
      />
    </main>
  );
}
