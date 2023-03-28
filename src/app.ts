import { createVElement, routerDOM, PagesInfo, Link } from "@/framework";
import {
  about,
  create,
  details,
  login,
  myTalkRoom,
  selection,
} from "./app/pages";

/**
 * ルーティング設定
 */
const pages: PagesInfo = {
  "/": createVElement("div", {}, "testpage"),
  "/about": createVElement("div", {}, about),
  "/create": createVElement("div", {}, create),
  "/details": createVElement("div", {}, details),
  "/login": createVElement("div", {}, login),
  "/myTalkRoom": createVElement("div", {}, myTalkRoom),
  "/selection": createVElement("div", {}, selection),
};

export const app = (state, action) => {
  return createVElement(
    "div",
    { style: "background: #d9d9d9;" },
    routerDOM(pages),
    Link("top", "/"),
    Link("about", "/about"),
    Link("create", "/create"),
    Link("details", "/details"),
    Link("login", "/login"),
    Link("myTalkRoom", "/myTalkRoom"),
    Link("selection", "/selection")
  );
};
