import { createVElement } from "@/framework";

// ページ名はMyTalkRoom
export const myTalkRoom = createVElement(
    "body",
    { class: "body",style:"background-color: #D9D9D9;" },
    createVElement(
        "main",
        { class: "main" },
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
        createVElement( //やきしゃも写真
            "img",
            { src:"src/img/burningshamo.png",alt:"burningshamo" ,style:"position: ",  }
        )
        
        /* ここに自分の投稿とリアクションした人を表示 */
    )
);