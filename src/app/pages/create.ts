import { createElement, createVElement } from "@/framework";

//ページ名は新規登録
export const login = createVElement(
    "body",
    { class: "body" },
    createVElement(
        "main", 
        { class: "main" },
        createVElement(
            "h1",
            {},
            "welcome ASFA!",
        ),
        createVElement(
            "h2",
            {  },
            "新規会員登録"
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
                    type:"id",
                    name:"userid",
                    placeholder:"username",
                    },
                ),
                createVElement(
                    "input",
                    {
                    type:"",
                    name:"userid",
                    placeholder:"username",
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