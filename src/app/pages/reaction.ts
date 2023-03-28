import { createVElement } from "@/framework";
import { footer } from "@/components/footer";
import { sidebar } from "@/components/sidebar";
// ページ名はMyTalkRoom
export const reaction = createVElement(
    "body",
    { class: "body",style:" style:width:100vw; height:100vh" },
    footer,
    sidebar,
    createVElement(
        "main",
        { class: "main" ,style:"padding-left:5%"},
        createVElement(//上部見出し
            "div",
            {style:"display: flex; width:45%;height:8rem;margin:2rem 0 1rem 0;" },
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
        createVElement(
            "div",
            { class:"logData" },
            createVElement(
                "label",
                {},
                "タイトル"
            ),
            createVElement(
                "h1",
                {
                    style:"background-color: #D9D9D9;line-height:3rem; width:80%; margin:1rem auto 0rem 2rem;",
                },
                `{}`/* バックから？拾ったタイトル */ 
            ),
            createVElement(
                "label",
                {},
                "投稿内容"
            ),
            createVElement(
                "h2",
                {
                    style:"background-color: #D9D9D9;line-height:3rem; width:80%; margin:1rem auto 0rem 2rem;",
                },
                `{}`/* バックから？拾った投稿内容 */
            ),
        ),
        createVElement( //お気に入り
            "div",
            { style:"position:flex;" },
            createVElement(
                "img",
                {src:"",alt:"star"},
            ),
            createVElement(
                "h1",
                {  },
                `{}`//favoriteNumber
            ),
        ),
        createVElement( //ここを人数分回せるようにしたい
            "div",
            {},
            createVElement(//userIcon
                "img",
                {src:"",alt:"userIcon"},
            ),
            createVElement(//userName
                "h1",
                {  },
            )
        ),
        createVElement( //やきしゃもエンドポイント
            "img",
            { src:"",alt:"burningshamo" ,style:"position: ",  }
        )
    ) 
);