import { createVElement } from "@/framework";

export const about = createVElement(
    "body",
    { class: "body" },
    createVElement(
        "main",
        { class: "main" },
        createVElement(
            "div",
            {},
            createVElement(
                "h1",
                {},
                "全日本フルスクラッチ協会の軌跡",//一番上部の見出し
            ),
        ),
        createVElement(//ここで写真とテキストを表示・枚数分だけ複製
            "div",
            {},
            createVElement(
                "img",
                {src:""},
            ),
            createVElement(
                "h2",
                {},
                "hogehoge"
            )
        )
/* サイドの会員名簿など（未記載）はバックから取ってくるけど処理が分からん */
    )
);