import { createVElement, Link } from "@/framework";
import { _factory, appRoot } from "../actions/actions";
import { state } from "../states/states";

export const home = () => {
  //   while (true) {
  //     if (
  //       stateFactory<State>() !== undefined &&
  //       actionFactory<Actions>() !== undefined
  //     ) {
  //       const state = stateFactory<State>();
  //       console.log(state);
  //       const actions = actionFactory<Actions>();
  //       break;
  //     } else {
  //       console.log("out");
  //     }
  //   }
  const state = appRoot.state;
  const actions = appRoot.actions;
  return createVElement(
    "div",
    {
      class: "nes-container is-rounded",
      style: "padding: 2rem;",
      //   defer: "yes",
    },
    createVElement(
      "h1",
      {
        class: "title",
        style: "margin-bottom: 2rem;",
      },
      createVElement("i", { class: "nes-icon heart is-medium" }),
      "Virtual DOM TODO App!!"
    ),

    Link("home", "/home"),
    createVElement(
      "form",
      {
        class: "nes-container",
        style: "margin-bottom: 2rem;",
      },
      createVElement(
        "div",
        {
          class: "nes-field",
          style: "margin-bottom: 1rem;",
        },
        createVElement(
          "label",
          {
            class: "label",
            for: "task-title",
          },
          "Title"
        ),
        createVElement("input", {
          type: "text",
          id: "task-title",
          class: "nes-input",
          value: state.form.title,
          oninput: (ev: Event) => {
            const target = ev.target as HTMLInputElement;
            state.form.title = target.value;
            // _factory.setState(state);
            actions.validate(state, target.value);
            // actions.validate(state, target.value);
          },
        })
      ),
      createVElement(
        "p",
        {
          class: "nes-text is-error",
          style: `display: ${state.form.hasError ? "display" : "none"}`,
        },
        "Enter a value between 3 and 20 characters"
      ),
      createVElement(
        "button",
        {
          type: "button",
          class: "nes-btn is-primary",
          onclick: () => {
            console.log(_factory);
            console.log(state);
            console.log(actions);

            if (state.form.hasError) return;
            actions.createTask(state, state.form.title);
          },
        },
        "Create"
      )
    ),
    createVElement(
      "ul",
      { class: "nes-list is-disc nes-container" },
      ...state.tasks.map((task, i) => {
        return createVElement(
          "li",
          {
            class: "item",
            style: "margin-bottom: 1rem;",
          },
          task,
          createVElement(
            "button",
            {
              type: "button",
              class: "nes-btn is-error",
              style: "margin-left: 1rem;",
              onclick: () => actions.removeTask(state, i),
            },
            "×"
          )
        );
      })
    )
  );
};
