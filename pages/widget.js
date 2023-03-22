// import * as React from "react";

// import {
//   Button,
//   Box,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemAvatar,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Avatar,
//   InputBase,
//   Slide,
// } from "@mui/material";
// import {
//   FormatColorResetRounded,
//   TroubleshootRounded,
//   TroubleshootSharp,
//   UploadFileRounded,
// } from "@mui/icons-material";
// import ReactImageFileToBase64 from "react-file-image-to-base64";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import { deepOrange, green } from "@mui/material/colors";

// import Masonry from "@mui/lab/Masonry";
// import LoadingButton from "@mui/lab/LoadingButton";
// import SaveIcon from "@mui/icons-material/Save";
// import CancelIcon from "@mui/icons-material/Cancel";

// export default function ImageUploader({ onImageUpload }) {
//   const [loading, setLoading] = React.useState(false);
//   const [blobData, setBlobData] = React.useState([]);
//   const [data, setData] = React.useState([]);

//   React.useEffect(() => {
//     setData([...blobData.filter((item, i) => item.deleted != true)]);
//   }, [blobData]);

//   // React.useEffect(() => {
//   //   onImageUpload([...data]);
//   // }, [data]);

//   const buffer = (action) => {
//     action == "start" && setLoading(true);
//     action == "end" && setLoading(false);
//   };

//   function formatBytes(int) {
//     const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

//     let l = 0,
//       n = parseInt(int, 10) || 0;

//     while (n >= 1024 && ++l) {
//       n = n / 1024;
//     }

//     return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
//   }

//   const handleDelete = (index) => {
//     const deleteBlob = blobData;
//     deleteBlob[index].deleted = true;
//     // setBlobData(blobData.filter((el, i) => i != index));
//     setBlobData([...deleteBlob]);
//   };

//   const handleOnSelect = (e) => {
//     const files = e.target.files;
//     const filesArray = Object.keys(files).map((key) => files[key]);
//     var localBlobData = [];
//     console.log(files);
//     filesArray.map((file, index) => {
//       buffer("start");
//       if (!file) {
//         console.log("nothing here");
//       }

//       let start = performance.now();
//       var mime = file.type, // store mime for later
//         name = file.name,
//         size = file.size,
//         rd = new FileReader(); // create a FileReader

//       rd.onload = function (e) {
//         var blob = new Blob([e.target.result], {
//             type: mime,
//           }),
//           url = URL.createObjectURL(blob),
//           img = new Image();

//         console.log(url);
//         setBlobData([
//           ...blobData,
//           ...localBlobData,
//           { src: `${url}`, name: `${name}`, type: `${mime}`, size: `${size}` },
//         ]);
//         localBlobData.push({
//           src: `${url}`,
//           name: `${name}`,
//           type: `${mime}`,
//           size: `${size}`,
//         });
//         buffer("end");
//         img.onload = function () {
//           URL.revokeObjectURL(this.src); // clean-up memory
//           console.log(start - performance.now()); // add image to DOM
//         };
//       };

//       var chunk = file.slice(0, 1024 * 1024 * 10); // .5MB
//       rd.readAsArrayBuffer(chunk); // read file object

//       e.target.value = "";
//     });
//   };

//   return (
//     <div>
//       <input
//         id="upload-image"
//         type="file"
//         onChange={handleOnSelect}
//         multiple
//         accept="image/*"
//         style={{ display: "none" }}
//       />
//       <LoadingButton
//         loading={loading}
//         loadingPosition="start"
//         startIcon={<UploadFileRounded />}
//         variant="outlined"
//         type="upload"
//         onClick={() => document.getElementById("upload-image").click()}
//       >
//         Upload
//       </LoadingButton>
//       <List>
//         {blobData.map((item, index) => (
//           <Slide
//             key={index}
//             in={!item.deleted}
//             direction={!item.deleted ? "right" : "left"}
//             mountOnEnter
//             unmountOnExit
//             timeout={
//               !item.deleted
//                 ? index * 250 + Math.floor(Math.random() * 100)
//                 : 100
//             }
//           >
//             <ListItem
//               disablePadding
//               secondaryAction={
//                 <IconButton
//                   edge="end"
//                   aria-label="delete"
//                   onClick={() => handleDelete(index)}
//                 >
//                   <CancelIcon sx={{ mr: -1 }} />
//                 </IconButton>
//               }
//             >
//               <ListItemAvatar>
//                 <a
//                   href={item.src}
//                   target="_blank"
//                   rel="noreferrer"
//                   id={`image-${index}`}
//                 >
//                   <Avatar variant="rounded" src={item.src} />
//                 </a>
//               </ListItemAvatar>
//               <ListItemText
//                 primary={
//                   <InputBase
//                     fullWidth
//                     sx={{
//                       flex: 1,
//                       width: "calc(100% - 24px - 8px*2)",
//                       marginLeft: "0",
//                     }}
//                     defaultValue={item.name}
//                     placeholder={`this can't be empty`}
//                     onChange={(e) => {
//                       setBlobData([
//                         ...blobData.map((obj, i) =>
//                           i == index
//                             ? { ...item, name: `${e.target.value}` }
//                             : obj
//                         ),
//                       ]);
//                     }}
//                   />
//                 }
//                 secondary={formatBytes(item.size) + " " + item.type}
//               />
//             </ListItem>
//           </Slide>
//         ))}
//       </List>
//     </div>
//   );
// }

import Uploader from "../src/component/imageUploader";

export default function ImageUploader() {
  return <Uploader setImageUpload={(value) => console.log(value)} />;
}
