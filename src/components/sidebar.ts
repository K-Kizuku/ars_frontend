import { createVElement } from "@/framework";

export const sidebar = createVElement(
  "div",
  { class: "sidebar" },
  createVElement(
    "div",
    {class: "wrapper",
    style:"position: absolute; writing-mode: vertical-rl; top: 0%; left: 0%; height: 100%;"
  },
    createVElement(
      "h2", { 
         color: "#FFF",
        //  width: "60%",
         //  writing-mode: vertical-rl;
           },
        " 　All Japan Full Scratch Asocciate "),
        
  createVElement(
    "div", {
        width: "50%",
        height: "100%", 
        backgroundColor: "#0000000"
  }
   )
)
)

 
    