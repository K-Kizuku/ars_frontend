import { createVElement } from "@/framework";

export const footer = createVElement(
  "div",
  { class: "footer" },
  createVElement(
    "div",
    {class: "wrapper",
    style:"position: absolute; left: 0; bottom: 0;"
  
  },
     createVElement(
      "div",{
        style:"position: absolute; left: 0; bottom: 0;"       
       },
     ),
      createVElement(
        "div",  {
          // margin: "0",
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "25%", 
          backgroundColor: "#0000000"
        } ,
      createVElement(
        "img", 
        {
        src: 'dist/afsa.png', 
        posithion: "static", 
        bottom: "0", 
        right: "0", 
        width: "6%", 
       
       } ,
      
    ),
    createVElement("img", {
      src: 'dist/afsatext.png', 
      position: "flex", 
      bottom: "0", 
      // left: "50%",
      textAlign: "center",
      width: "35%", 
     
    } ,
    ),
    ),
   
    ),
)
