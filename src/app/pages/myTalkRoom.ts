import { createVElement } from "@/framework";
import { footer } from "@/components/footer";
import { sidebar } from "@/components/sidebar";

// ページ名はMyTalkRoom
export const myTalkRoom = createVElement(
    "body",
    { class: "body",style:"background-color: #fffffff;width:100vw;height:100vh; padding-left: 5%;" },
    footer,
    sidebar,
    createVElement(
        "main",
        { class: "main" },
        createVElement(//上部見出し
            "div",
            {
                style:"display: flex; ;" 
            },
            createVElement(
                "img",
                { src:"src/img/logo.png" ,alt:"usericon", style:"margin:1rem 2rem;"}//userのアイコンを表示予定
            ),
            createVElement(
                "h1",
                { style:"margin:auto 2rem;" },
                "My Talk Room"
            )
        ),
        createVElement(//投稿作成の場所
            "div",
            { style:"flex-direction: column;" },
            createVElement(
                "input",
                { 
                type:"text",
                name:"title",
                placeholder:"タイトルを入力",
                style:"line-height:3rem; width:60%; margin:1rem auto 0rem 2rem;  ",
                },
            ),
            createVElement(
                "textarea",
                {
                placeholder:"投稿内容を入力",
                wrap:"soft",
                style:"height:10rem; width:80%; margin:1rem auto 0rem 2rem;",
                }
            ),
            createVElement(
                "input",
                {
                type:"submit",
                value:"投稿",
                style:"font-size: large;line-height:2rem; width:30%;margin:1rem auto 1rem 15rem; background: #FDFF88"
                },
            )

        )
        /* 過去の投稿は右サイドバーとして作成予定 */
    )
);