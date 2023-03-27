    
// import { createVElement } from "@/framework";

// export const footer = createVElement(
//   "div",
//   { class: "footer" }, 
//   createVElement("div", {
//     style: () => {
//     }
//       // position: "fixed",
//       // bottom: "0",
//       // width: "100%",
//       // height: "20%",
//       // left: "0",
//       // background: "#2f4f4f",
//       // transform: "rotate(90.27deg)",
//   } , )

// );

import { createVElement } from "@/framework";
// import   from "@/img/afsa.png";

export const footer = createVElement(
  "div",
  { class: "footer" }, 
    createVElement("div", {
      style: 'position: "fixed", bottom: "0",width: "100%",height: "40%", background-Color: "#1E1E1E"'
    } ,
    createVElement("img", {
      src: 'img: "../img/afsa.png", posithion: "static", bottom: "0", left: "0", width: "20%", height: "40%", '} 
  ),)
);