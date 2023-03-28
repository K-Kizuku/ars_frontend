import { createElement, createVElement } from "@/framework";
import { footer } from "@/components/footer";
import { sidebar } from "@/components/sidebar";


//ページ名は新規登録
export const create = createVElement(
    "body",
    { class: "body",
      style:"background: #D9D9D9",
      
  },
    footer,
    sidebar,
    createVElement(
        "main", 
        { class: "main", 
          style:" height: 110px",
      },
        createVElement(
            "div",
            {},
            createVElement(
                "h1",
                {},
                "welcome ASFA!",
            ),
            createVElement(
                "h2",
                {},
                "新規会員登録"
            ),
        ),
        createVElement(
            "div",
            {},
            createVElement(
                "form",
                { id:"userIconForm",enctype:"multipart/form-data"},
                createVElement(
                    "input",
                    {
                        type:"file",
                        name:"userIcon",
                        accept:"image/*",
                        style: "margin: 0 0 0 40%",

                    },
                ),
                createVElement(
                    "input",
                    {
                        type:"submit",
                        value:"登録",
                        style:"background-Color: #FDFF88",
                    },
                )
            )
        ),
        createVElement(
            "div",
            { class: "fix",
              display: "flex",
              style: "margin: 0 0 0 20%",

          },
            createVElement(
                "form",
                {class: "userdata"},
                createVElement(
                    "input",
                    {
                    type:"name",
                    name:"userid",
                    placeholder:"username",
                    style:"line-height:3rem; width:60%; margin:1rem auto 0rem 2rem;  ",
                    },
                ),
                createVElement(
                    "input",
                    {
                    type:"id",
                    name:"userid",
                    placeholder:"email",
                    style:"line-height:3rem; width:60%; margin:1rem auto 0rem 2rem;  ",
                    },
                ),
                createVElement(
                    "input",
                    {
                    type:"password",
                    name:"password",
                    placeholder:"password" ,
                    style:"line-height:3rem; width:60%; margin:1rem auto 0rem 2rem;  ",
                    },
                ),
                createVElement(
                    "input",
                    { 
                    type:"submit",
                    value:"Enter",
                    style:"line-height:3rem; width:50%; margin:1rem 6rem 0rem 4rem; background-Color: #FDFF88 ",
                    },                   
                )
            )
        )
    )
);