import { createVElement } from "@/framework";
import { footer } from "@/components/footer";
import { sidebar } from "@/components/sidebar";

export const backcolorfootersidebar = createVElement(
    "div",  {
      class: "backcolor",
      style: "position: absolute ,width: 100% ,height: 100%, backgroundColor: #D9D9D9"
    } ,
    footer,
    sidebar
  )




