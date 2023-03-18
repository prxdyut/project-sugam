import * as React from "react";

export default function ImageUploader() {
  const [blobURLs, setBlobURLs] = React.useState([]);

  const tryThis = (e) => {
    const files = e.target.files;
    const filesArray = Object.keys(files).map((key) => files[key]);
    console.log(filesArray);
    filesArray.map((file) => {
      if (!file) {
        console.log("nothing here");
        return;
      }

      let start = performance.now();

      var mime = file.type, // store mime for later
        rd = new FileReader(); // create a FileReader

      rd.onload = function (e) {
        var blob = new Blob([e.target.result], {
            type: mime,
          }),
          url = URL.createObjectURL(blob),
          img = new Image();
        console.log(url);
        setBlobURLs([...blobURLs, { src: `${url}` }]);
        img.onload = function () {
          URL.revokeObjectURL(this.src); // clean-up memory
          console.log(start - performance.now()); // add image to DOM
        };
      };

      var chunk = file.slice(0, 1024 * 1024 * 10); // .5MB
      rd.readAsArrayBuffer(chunk); // read file object
    });
  };

  return (
    <>
      Upload
      <input type="file" id="fileInput" onChange={tryThis} multiple />
      <div>
        duration: <span id="sp"></span>
      </div>
      {blobURLs.map((img, i) => (
        <a key={i} href={img.src} target="_blank" rel="noreferrer">
          <img src={img.src} style={{ width: "50%" }} />
        </a>
      ))}
    </>
  );
}
