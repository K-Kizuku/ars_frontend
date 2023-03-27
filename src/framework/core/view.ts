import type { NodeType, Attributes, VNode } from "./types";

/**
 * 仮想DOMの生成
 */
export const createVElement = (
  nodeName: keyof HTMLElementTagNameMap,
  attributes: Attributes,
  ...children: NodeType[]
): VNode => {
  return { nodeName, attributes, children };
};

/**
 * リアルDOMの生成
 */
export const createElement = (node: NodeType): HTMLElement | Text => {
  if (!isVNode(node)) {
    return document.createTextNode(node.toString());
  }

  const element = document.createElement(node.nodeName);
  setAttributes(element, node.attributes);
  console.log(node);
  node.children.forEach((child) => element.appendChild(createElement(child)));
  return element;
};

const isVNode = (node: NodeType): node is VNode => {
  return typeof node !== "string" && typeof node !== "number";
};

const setAttributes = (target: HTMLElement, attributes: Attributes): void => {
  for (let attribute in attributes) {
    if (isEventAttribute(attribute)) {
      const eventName = attribute.slice(2);
      target.addEventListener(
        eventName,
        attributes[attribute] as EventListener
      );
    } else {
      target.setAttribute(attribute, attributes[attribute] as string);
    }
  }
};

const isEventAttribute = (attribute: string): boolean => {
  // onで始まる属性はイベントとして扱う
  return /^on/.test(attribute);
};

enum ChangedType {
  /** 差分なし */
  None,
  /** nodeの型が違う */
  Type,
  /** テキストノードが違う */
  Text,
  /** ノード名(タグ名)が違う */
  Node,
  /** inputのvalueが違う */
  Value,
  /** 属性が違う */
  Attr,
}

/**
 * 受け取った2つの仮想DOMの差分を検知する
 */
const hasChanged = (a: NodeType, b: NodeType): ChangedType => {
  // different type
  if (typeof a !== typeof b) {
    return ChangedType.Type;
  }

  // different string
  if (!isVNode(a) && a !== b) {
    return ChangedType.Text;
  }

  // 簡易的比較
  if (isVNode(a) && isVNode(b)) {
    if (a.nodeName !== b.nodeName) {
      return ChangedType.Node;
    }
    if (a.attributes.value !== b.attributes.value) {
      return ChangedType.Value;
    }
    if (JSON.stringify(a.attributes) !== JSON.stringify(b.attributes)) {
      return ChangedType.Attr;
    }
  }
  return ChangedType.None;
};

/**
 * 仮想DOMの差分を検知し、リアルDOMに反映する
 */
export const updateElement = (
  parent: HTMLElement,
  oldNode: NodeType,
  newNode: NodeType,
  index = 0
): void => {
  console.log("blbubyvyuvutyctyc");
  // oldNodeがない場合は新しいノード
  if (!oldNode) {
    parent.appendChild(createElement(newNode));
    return;
  }

  const target = parent.childNodes[index];

  // newNodeがない場合はそのノードを削除する
  if (!newNode) {
    parent.removeChild(target);
    return;
  }
  // 両方ある場合は差分検知し、パッチ処理を行う
  const changeType = hasChanged(oldNode, newNode);
  switch (changeType) {
    case ChangedType.Type:
    case ChangedType.Text:
    case ChangedType.Node:
      parent.replaceChild(createElement(newNode), target);
      return;
    case ChangedType.Value:
      // valueの変更時にNodeを置き換えてしまうとフォーカスが外れてしまうため
      updateValue(
        target as HTMLInputElement,
        (newNode as VNode).attributes.value as string
      );
      return;
    case ChangedType.Attr:
      // 属性の変更は、Nodeを再作成する必要がないので更新するだけ
      updateAttributes(
        target as HTMLElement,
        (oldNode as VNode).attributes,
        (newNode as VNode).attributes
      );
      return;
  }

  //　再帰的にupdateElementを呼び出し、childrenの更新処理を行う
  if (isVNode(oldNode) && isVNode(newNode)) {
    for (
      let i = 0;
      i < newNode.children.length || i < oldNode.children.length;
      i++
    ) {
      updateElement(
        target as HTMLElement,
        oldNode.children[i],
        newNode.children[i],
        i
      );
    }
  }
};

// NodeをReplaceしてしまうとinputのフォーカスが外れてしまうため
const updateAttributes = (
  target: HTMLElement,
  oldAttributes: Attributes,
  newAttributes: Attributes
): void => {
  // remove attrs
  for (let attributes in oldAttributes) {
    if (!isEventAttribute(attributes)) {
      target.removeAttribute(attributes);
    }
  }
  // set attrs
  for (let attributes in newAttributes) {
    if (!isEventAttribute(attributes)) {
      target.setAttribute(attributes, newAttributes[attributes] as string);
    }
  }
};

// updateAttributesでやりたかったけど、value属性としては動かないので別途作成
const updateValue = (target: HTMLInputElement, newValue: string) => {
  target.value = newValue;
};
