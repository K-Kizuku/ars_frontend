"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var framework_1 = require("./src/framework");
var state = {
    tasks: ["Learn about Virtual DOM", "Write a document"],
    form: {
        title: "",
        hasError: false,
    },
};
var actions = {
    validate: function (state, title) {
        if (!title || title.length < 3 || title.length > 20) {
            state.form.hasError = true;
        }
        else {
            state.form.hasError = false;
        }
        return !state.form.hasError;
    },
    createTask: function (state, title) {
        if (title === void 0) { title = ""; }
        state.tasks.push(title);
        state.form.title = "";
    },
    removeTask: function (state, index) {
        state.tasks.splice(index, 1);
    },
};
/**
 * View: 描画関連
 */
var view = function (state, actions) {
    // prettier-ignore
    return (0, framework_1.createVElement)('div', {
        class: 'nes-container is-rounded',
        style: 'padding: 2rem;'
    }, (0, framework_1.createVElement)('h1', {
        class: 'title',
        style: 'margin-bottom: 2rem;'
    }, (0, framework_1.createVElement)('i', { class: 'nes-icon heart is-medium' }), 'Virtual DOM TODO App '), (0, framework_1.createVElement)('form', {
        class: 'nes-container',
        style: 'margin-bottom: 2rem;'
    }, (0, framework_1.createVElement)('div', {
        class: 'nes-field',
        style: 'margin-bottom: 1rem;',
    }, (0, framework_1.createVElement)('label', {
        class: 'label',
        for: 'task-title'
    }, 'Title'), (0, framework_1.createVElement)('input', {
        type: 'text',
        id: 'task-title',
        class: 'nes-input',
        value: state.form.title,
        oninput: function (ev) {
            var target = ev.target;
            state.form.title = target.value;
            actions.validate(state, target.value);
        }
    })), (0, framework_1.createVElement)('p', {
        class: 'nes-text is-error',
        style: "display: ".concat(state.form.hasError ? 'display' : 'none'),
    }, 'Enter a value between 3 and 20 characters'), (0, framework_1.createVElement)('button', {
        type: 'button',
        class: 'nes-btn is-primary',
        onclick: function () {
            if (state.form.hasError)
                return;
            actions.createTask(state, state.form.title);
        }
    }, 'Create')), framework_1.createVElement.apply(void 0, __spreadArray(['ul',
        { class: 'nes-list is-disc nes-container' }], state.tasks.map(function (task, i) {
        return (0, framework_1.createVElement)('li', {
            class: 'item',
            style: 'margin-bottom: 1rem;'
        }, task, (0, framework_1.createVElement)('button', {
            type: 'button',
            class: 'nes-btn is-error',
            style: 'margin-left: 1rem;',
            onclick: function () { return actions.removeTask(state, i); }
        }, '×'));
    }), false)));
};
new framework_1.App({
    el: "#app",
    state: state,
    view: view,
    actions: actions,
});
