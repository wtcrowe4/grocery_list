"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Spinner = () => {
    return (react_1.default.createElement("div", { className: "spinner-container", style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        } },
        react_1.default.createElement("div", { className: "spinner-border", role: "status" },
            react_1.default.createElement("span", { className: "sr-only" }))));
};
exports.default = Spinner;
