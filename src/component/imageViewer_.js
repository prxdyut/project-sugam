import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import ImageComponent from "next/image";

function getImageDimensions(src) {
  const [url, setUrl] = React.useState(false);

  const getMeta = (url) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = url;
    });

  (async () => {
    getMeta(src).then(
      (img) =>
        !url && setUrl({ width: img.naturalWidth, height: img.naturalHeight })
    );
    console.log(url);
  })();
  
  
  return url;
}

function NextJsImage(image, offset, rect) {
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

export default function Home({ images }) {
  const [open, setOpen] = React.useState(false);
  // const [slides, setSlides] = React.useState(false);
  const slides = [
    {
      src: "https://picsum.photos/200/300",
      ...getImageDimensions("https://picsum.photos/200/300"),
    },
    {
      src: "https://picsum.photos/200/400",
      ...getImageDimensions("https://picsum.photos/200/400"),
    },
    {
      src: "https://picsum.photos/200/350",
      ...getImageDimensions("https://picsum.photos/200/350"),
    },
  ];
  console.log(slides);

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

      {!(typeof document === "undefined") && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          render={{ slide: NextJsImage }}
          plugins={[Zoom]}
        />
      )}
    </main>
  );
}
