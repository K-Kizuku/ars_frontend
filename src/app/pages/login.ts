import { createElement, createVElement } from "@/framework";

/* アイコン編集欄は未記入 */
export const login = createVElement(
    "body",
    { class: "temp" },
    createVElement(
        "main", 
        { class: "main" },
        createVElement(
            "h1",
            {},
            "また来てしまったんか",
        ),
        createVElement(
            "h2",
            {  },
            "ログイン"
        ),
        createVElement(
            "div",
            {},
            createVElement(
                "form",
                {class: "userdata"},
                createVElement(
                    "input",
                    {
                    type:"email",
                    name:"email",
                    placeholder:"e-mail",
                    },
                ),
                createVElement(
                    "input",
                    {
                    type:"password",
                    name:"password",
                    placeholder:"password" 
                    },
                ),
                createVElement(
                    "input",
                    { 
                    type:"submit",
                    value:"Enter",
                    },                   
                )
            )
        )
    )
);