import { createVElement } from "@/framework";

// ページ名はabout
export const about = createVElement(
  "body",
  { class: "body", style: "background-color: #D9D9D9;" },
  createVElement(
    "main",
    {
      class: "main",
    },
    createVElement(
      "div",
      { style: "width: 70%;" },
      createVElement(
        "h1",
        {
          style:
            "text-decoration: underline; text-decoration-color: green; margin: 1rem 1rem",
        },
        "全日本フルスクラッチ協会の軌跡" //一番上部の見出し
      )
    ),
    createVElement(
      //ここで写真とテキストを表示・枚数分だけ複製
      "div",
      {
        style: "display:flex;",
      },
      createVElement("img", {
        src: "src/img/about1.jpeg",
        style: "width: 30%; height: 30%; margin:1rem 2rem",
      }),
      createVElement(
        "h2",
        { style: "width: 60%; height; 30%; margin: auto" },
        "我々、全日本フルスクラッチ協会は「全て書けば、全て分かる」を理念とし、最低ラインを言語機能と定めてフルスクラッチで開発を行いました。"
      )
    ),
    createVElement(
      //ここで写真とテキストを表示・枚数分だけ複製
      "div",
      {
        style: "display:flex;",
      },
      createVElement("img", {
        src: "src/img/about2.jpeg",
        style: "width: 30%; height: 30%; margin:1rem 2rem",
      }),
      createVElement(
        "h2",
        { style: "width: 60%; height; 30%; margin: auto" },
        "フルスクラッチとは、完全にゼロの何もない状態からあらゆる機能を実装していくことを指します。つまり「フルスクラッチで開発する」とは、ライブラリやフレームワークを使わず、必要な機能を全て自分で実装することを意味します。"
      )
    ),
    createVElement(
      //ここで写真とテキストを表示・枚数分だけ複製
      "div",
      {
        style: "display:flex;",
      },
      createVElement("img", {
        src: "src/img/about3.jpeg",
        style: "width: 30%; height: 30%; margin:1rem 2rem",
      }),
      createVElement(
        "h2",
        { style: "width: 60%; height; 30%; margin: auto" },
        "フルスクラッチでの開発は、自分たちの目的に合わせて機能を細かく制御することができるため、柔軟性が高く、プログラムの効率や速度も高めることができます。"
      )
    ),
    createVElement(
      //ここで写真とテキストを表示・枚数分だけ複製
      "div",
      {
        style: "display:flex;",
      },
      createVElement("img", {
        src: "src/img/about4.jpeg",
        style: "width: 30%; height: 30%; margin:1rem 2rem",
      }),
      createVElement(
        "h2",
        { style: "width: 60%; height; 30%; margin: auto" },
        "我々が開発したものは「全て」です。"
      )
    ),
    createVElement(
      //ここで写真とテキストを表示・枚数分だけ複製
      "div",
      {
        style: "display:flex;",
      },
      createVElement("img", {
        src: "src/img/about5.jpeg",
        style: "width: 30%; height: 30%; margin:1rem 2rem",
      }),
      createVElement(
        "h2",
        { style: "width: 60%; height; 30%; margin: auto" },
        "フルスクラッチ開発では「全て書けば、全て分かる」ように、全てにおいて貴重な学びが得られます。ぜひ全日本フルスクラッチ協会への入会をご検討ください。"
      )
    )

    /* サイドの会員名簿など（未記載）はバックから取ってくるけど処理が分からん */
  )
);
