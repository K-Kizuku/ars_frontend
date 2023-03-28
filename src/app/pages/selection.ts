import { createVElement } from "@/framework";
import { footer } from "@/components/footer";
import { sidebar } from "@/components/sidebar";
// ページ名はログインor新規登録
export const selection = createVElement(
  "body",
  { class: "body", background: "#D9D9D9" },
  footer,
  sidebar,
  createVElement(
    "main",
    { class: "main" },
    createVElement(
      "div",
      { class: "yakishamopng", left: "0%", bottom: "0%" },
      createVElement(
        "img",
        { src: "" } //やきしゃもさんの写真
      )
    ),
    createVElement(
      "div",
      { class: "welcome", right: "0%", top: "20%" },
      createVElement(
        "div",
        { class: "text", style: "margin: 0 0 0 55%" },
        createVElement("h1", {}, " ようこそ"),
        createVElement("h1", {}, "全日本フルスクラッチ協会へ。"),
        createVElement("h1", {}, "全て書けば全て分かる")
      ),
      createVElement(
        "div",
        { class: "icon", style: "margin: 5% 0 0 55%" },
        createVElement(
          "a",
          { href: "" }, //新規登録のurl
          createVElement(
            "img",
            {
              src: "dist/newarrival.png",
              position: "absolite",
              height: "40%",
              width: "40%",
            } //新規登録のimage
          )
        ),
        createVElement(
          "a",
          { href: "" }, //ログインのurl
          createVElement(
            "img",
            {
              src: "dist/login.png",
              position: "absolite",
              height: "40%",
              width: "40%",
            } //ログインのurl
          )
        )
      )
    )
  )
);

