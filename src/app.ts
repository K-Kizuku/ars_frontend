import {
  createVElement,
  routerDOM,
  PagesInfo,
  Link,
  Factory,
} from "@/framework";
import { home } from "./app/pages/home";
import { appRoot } from "./app/actions/actions";

/**
 * ルーティング設定
 */
const pages: PagesInfo = {
  "/": createVElement("div", {}, "testpage"),
  "/home": createVElement("div", {}, home()),
};

export const app = (state, action) => {
  return createVElement("div", {}, routerDOM(pages), Link("OKKKKK", "/home"));
};
