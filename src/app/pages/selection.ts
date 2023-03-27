import { createVElement } from "@/framework";

// ページ名はログインor新規登録
export const selection = createVElement(
    "body",
    { class: "body" },
    createVElement(
        "main",
        { class: "main" },
        createVElement(
            "div",
            { class:"yakishamopng" },
            createVElement(
                "img",
                { src:"" } //やきしゃもさんの写真
            ),
        ),
        createVElement(
            "div",
            {class:"text"},
            createVElement(
                "h1",
                {},
                "ようこそ"
            ),
            createVElement(
                "h1",
                {},
                "全日本フルスクラッチ協会へ。"
            ),
            createVElement(
                "h2",
                {},
                "全て書けば全て分かる"
            ),
        ),
        createVElement(
            "a",
            { href:"" },//新規登録のurl
            createVElement(
                "img",
                { src: ""},//新規登録のimage
            )
        ),
        createVElement(
            "a",
            {href:""},//ログインのurl
            createVElement(
                "img",
                { src:"" },//ログインのurl
            )
        )
    )
);