import { createVElement } from "@/framework";
export const temp = createVElement(
    "body",
    { class: "body" },
    createVElement(
        "main", 
        { class: "main" },
        createVElement(//myTalkRoomと同じタイトル
            "nav",
            {},
            createVElement(
                "h1",
                {},
                "My Talk Room"
            )
        ),
        createVElement( //過去の投稿を取得して表示する
            "nav",
            {},
            createVElement(//タイトルを表示したい
                "h1",
                {}
            ),
            createVElement(//投稿内容を表示したい
                "h2",
                {},
            ),
        ),
        createVElement(//星の数と、押した人の表示
            "nav",
            {},
        )
    )
);