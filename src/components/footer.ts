import { createVElement } from "@/framework";
// import  {asfa} from "@/img/afsa.png";
// import  {asfatext} from "@/img/afsatext.png";

export const footer = createVElement(
  "div",
  { class: "footer" }, 
      createVElement(
        "div",  {
          
          margin: "0",
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "25%", 
          backgroundColor: "#0000000"
        } ,
      createVElement(
        "img", 
        {
        src: '../img/afsa.png', 
        posithion: "static", 
        bottom: "0", 
        left: "0", 
        width: "20%", 
        height: "40%", 
      } ,
      createVElement("img", {
        src: '../img/afsatext.png', 
        position: "static", 
        bottom: "0", 
        left: "10%", 
        width: "20%", 
        height: "40%", 
      } ,
      createVElement(
        "h2", {
          Text: "全日本フルスクラッチ協会",
          position: "statics",
          bottom: "0",
          left: "10%",
          color: "#000000"
          
      } ,
    ),
    ),
    ),
      ),
)