import { createVElement } from "@/framework";

// ページ名はabout
export const about = createVElement(
    "body",
    { class: "body",style:"background-color: #D9D9D9;"  },
    createVElement(
        "main",
        {
            class: "main",
        },
        createVElement(
            "div",
            { style:"width: 70%;"},
            createVElement(
                "h1",
                {
                    style:"text-decoration: underline; text-decoration-color: green; margin: 1rem 1rem" 
                },
                "全日本フルスクラッチ協会の軌跡",//一番上部の見出し
            ),
        ),
        createVElement(//ここで写真とテキストを表示・枚数分だけ複製
            "div",
            {
                style:"display:flex;" 
            },
            createVElement(
                "img",
                {src:"src/img/about1.jpeg" ,style:"width: 30%; height: 30%; margin:1rem 2rem"},
            ),
            createVElement(
                "h2",
                { style:"width: 60%; height; 30%; margin: auto"  },
                "人類が健全で正常な世界で生きていけるように、他の人類が光の中で暮らす間、我々は暗闇の中に立ち、それと戦い、封じ込め、人々の目から遠ざけなければならない。"
            )
        ),
        createVElement(//ここで写真とテキストを表示・枚数分だけ複製
            "div",
            {
                style:"display:flex;" 
            },
            createVElement(
                "img",
                {src:"src/img/about2.jpeg" ,style:"width: 30%; height: 30%; margin:1rem 2rem"},
            ),
            createVElement(
                "h2",
                { style:"width: 60%; height; 30%; margin: auto" },
                "fugafuga"
            )
        )

/* サイドの会員名簿など（未記載）はバックから取ってくるけど処理が分からん */
    )
);