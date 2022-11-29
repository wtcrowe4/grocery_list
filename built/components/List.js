"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../css/App.css");
const react_bootstrap_1 = require("react-bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
function Item({ item, index, markItem, removeItem }) {
    return (react_1.default.createElement("div", { className: "itemList" },
        react_1.default.createElement("span", { style: { textDecoration: item.isDone ? "line-through" : "" } }, item.text),
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "outline-success", onClick: () => markItem(index) }, "\u2713"),
            ' ',
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "outline-danger", onClick: () => removeItem(index) }, "\u2715"))));
}
function FormItem({ addItem }) {
    const [value, setValue] = react_1.default.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value)
            return;
        addItem(value);
        setValue("");
    };
    return (react_1.default.createElement(react_bootstrap_1.Form, { onSubmit: handleSubmit },
        react_1.default.createElement(react_bootstrap_1.Form.Group, null,
            react_1.default.createElement(react_bootstrap_1.Form.Label, null,
                react_1.default.createElement("b", null, "Add what you need below!")),
            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", className: "input", value: value, onChange: e => setValue(e.target.value), placeholder: "Add an item" })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("button", { className: "submitButton", type: "submit" }, "Add Item")));
}
function List() {
    const [item, setItems] = react_1.default.useState([]);
    const addItems = (text) => {
        const newItems = [...item, { text }];
        setItems(newItems);
    };
    const markItem = (index) => {
        const newItems = [...item];
        newItems[index].isDone = true;
        setItems(newItems);
    };
    const removeItem = (index) => {
        const newItems = [...item];
        newItems.splice(index, 1);
        setItems(newItems);
    };
    //Email list to user
    const axios = require('axios');
    const { useSelector } = require("react-redux");
    const { user } = useSelector((state) => state.auth);
    const [sent, setSent] = react_1.default.useState(false);
    const subject = "Your List";
    const handleSend = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        if (!user)
            return;
        console.log(item);
        const email = user.email || user.user.email;
        try {
            const response = yield axios.post('http://localhost:8080/send_mail', { email, subject, item });
            console.log(response);
            setSent(true);
            console.log(sent);
        }
        catch (error) {
            console.log(error);
        }
    });
    return (react_1.default.createElement("div", { className: "listApp" },
        react_1.default.createElement("div", { className: "fixed-list-container" },
            react_1.default.createElement("h1", { className: "text-center mb-4" }, "Grocery List"),
            react_1.default.createElement(FormItem, { addItem: addItems }),
            react_1.default.createElement("div", null,
                item.map((item, index) => (react_1.default.createElement(react_bootstrap_1.Card, { key: index },
                    react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                        react_1.default.createElement(Item, { index: index, item: item, markItem: markItem, removeItem: removeItem }))))),
                react_1.default.createElement("button", { onClick: handleSend, className: "submitButton" }, "Send List to Me")))));
}
exports.default = List;
