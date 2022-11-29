"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../css/App.css");
const Home = () => {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("h1", null, "Home")));
};
exports.default = Home;
