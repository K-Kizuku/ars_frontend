import { createVElement } from "@/framework";
export const temp = createVElement(
    "body",
    { class: "body" },
    createVElement(
        "main",
        { class: "main" },
        createVElement(//上部見出し
            "div",
            {},
            createVElement(
                "img",
                { src:"" }//自分のアイコンの写真
            ),
            createVElement(
                "h1",
                {},
                "My Talk Room"
            )
        ),
        createVElement(//投稿作成の場所
            "div",
            {},
            createVElement(
                "input",
                { 
                type:"text",
                name:"title",
                placeholder:"タイトルを入力",
                },
            ),
            createVElement(
                "input",
                {
                type:"text",
                name:"text",
                placeholder:"投稿内容を入力"
                }
            ),
            createVElement(
                "input",
                {
                type:"submit",
                value:"投稿"
                },
            )

        )
        /* 過去の投稿は右サイドバーとして作成予定 */
    )
);