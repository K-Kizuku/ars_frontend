import { createElement, createVElement } from "@/framework";

// ページ名はログイン
/* アイコン編集欄は未記入 */
export const login = createVElement(
    "body",
    { class: "body" },
    createVElement(
        "main", 
        { class: "main" },
        createVElement(
            "img",
            { src:"src/image/akiko.png", alt:"akiko"},
        ),
        createVElement(
            "h1",
            {
                style:"background-color: red;"
            },
            "また来てしまったんか!",
        ),
        createVElement(
            "h2",
            {},
            "ログイン"
        ),
        createVElement(
            "div",
            {},
            createVElement(
                "form",
                {class: "form", id:"userform"},
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
                ),
            )
        )
    )
);