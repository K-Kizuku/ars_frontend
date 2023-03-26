import { createVElement, VNode, NodeType, createElement, App } from "../core";

export type PagesInfo = {
  [path: string]: NodeType;
};

var __PAGE__ = {};

// document.addEventListener("DOMContentLoaded", () => routingElement);
export const routerDOM = (pages: PagesInfo): VNode => {
  __PAGE__ = pages;
  return createVElement(
    "div",
    { id: "router-dom-container" },
    __PAGE__[window.location.pathname]
  );
};

export const routingElement = () => {
  const target = document.getElementById("router-dom-container");
  if (window.location.pathname in __PAGE__) {
    target.replaceChild(
      createElement(
        createVElement(
          "div",
          { class: "test" },
          __PAGE__[window.location.pathname]
        )
      ),
      target.childNodes[0]
    );
  } else {
    target.replaceChild(
      createElement(
        createVElement("div", { class: "not-found-page" }, "404 not found")
      ),
      target.childNodes[0]
    );
  }
};

export const Link = (children: NodeType, path: string): VNode =>
  createVElement(
    "a",
    {
      class: "default-link-component-button",
      href: path,
      onclick: (event: Event) => {
        event.preventDefault();
        window.history.pushState(null, "", path);
        routingElement();
      },
    },
    children
  );
