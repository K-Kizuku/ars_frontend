import { createVElement } from "@/framework";

export const sidebar = createVElement(
  "div",
  { class: "sidebar" },
  createVElement(
    "div",
    {class: "wrapper",
    style:"position: absolute; left: 0;;"
  },createVElement(
      "h2", { 
         color: "#FFF",
         // fontSize: 10%,
         //  writing-mode: vertical-rl;
           },
        "All Japan Full Scratch Asocciation"),
        
  createVElement(
    "div", {
        width: "20%",
        height: "100%", 
        backgroundColor: "#0000000"
  }
   )
)
)

 
    