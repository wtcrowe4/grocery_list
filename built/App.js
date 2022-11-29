"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/App.css");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const Home_1 = __importDefault(require("./views/Home"));
const Login_1 = __importDefault(require("./views/Login"));
const Register_1 = __importDefault(require("./views/Register"));
const Dashboard_1 = __importDefault(require("./views/Dashboard"));
const Header_1 = __importDefault(require("./components/Header"));
const MyLists_1 = __importDefault(require("./components/MyLists"));
const ListDashboard_1 = __importDefault(require("./views/ListDashboard"));
const react_1 = __importDefault(require("react"));
//import Lists from './components/Lists';
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("div", { className: "App" },
                react_1.default.createElement(Header_1.default, null),
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(Login_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/register", element: react_1.default.createElement(Register_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/dashboard", element: react_1.default.createElement(Dashboard_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/lists", element: react_1.default.createElement(MyLists_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/dashboard/:id", element: react_1.default.createElement(ListDashboard_1.default, null) })))),
        react_1.default.createElement(react_toastify_1.ToastContainer, null)));
}
exports.default = App;
