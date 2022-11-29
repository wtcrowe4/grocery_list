"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("../css/App.css");
const fa_1 = require("react-icons/fa");
const react_redux_1 = require("react-redux");
const authSlice_1 = require("../features/auth/authSlice");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
const Header = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user } = (0, react_redux_1.useSelector)((state) => state.auth);
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement("h1", { className: "title" }, "Grocery List"),
            react_1.default.createElement(react_bootstrap_1.Navbar, null,
                react_1.default.createElement(react_bootstrap_1.Nav, null, user ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { href: "/dashboard" },
                        react_1.default.createElement(fa_1.FaHome, null),
                        "My Home"),
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { href: "/lists" },
                        react_1.default.createElement(fa_1.FaList, null),
                        "My Lists"),
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { onClick: () => {
                            dispatch((0, authSlice_1.logout)(user));
                            navigate('/');
                            //state message is being read from login
                            //toast.success(message);
                            react_toastify_1.toast.success('Logged out successfully');
                            dispatch((0, authSlice_1.reset)());
                        } },
                        react_1.default.createElement(fa_1.FaSignOutAlt, null),
                        "Logout"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { className: "nav-link", href: "/" },
                        react_1.default.createElement(fa_1.FaHome, null),
                        "Home"),
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { className: "nav-link", href: "/register" },
                        react_1.default.createElement(fa_1.FaUserPlus, null),
                        "Register"),
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { className: "nav-link", href: "/login" },
                        react_1.default.createElement(fa_1.FaSignInAlt, null),
                        "Login"))))),
            react_1.default.createElement("p", { style: { fontSize: ".6em" } }, "Make sure to sign out to protect your information."))));
};
exports.default = Header;
