"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
//import ListForm from '../components/ListForm';
const Recipes_1 = __importDefault(require("../components/Recipes"));
const List_1 = __importDefault(require("../components/List"));
const Dashboard = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { user } = (0, react_redux_1.useSelector)((state) => state.auth ? state.auth : null);
    const { lists } = (0, react_redux_1.useSelector)((state) => state.lists ? state.lists : null);
    (0, react_1.useEffect)(() => {
        document.title = 'Dashboard';
        if (!user) {
            navigate('/login', { replace: true });
        }
        //dispatch(getOneList(lists.list._id));
    }, [user, navigate]);
    //Fix error on welcome message when user is null
    if (!user) {
        return null;
    }
    //Clear local storage when page closes
    // window.onbeforeunload = () => {
    //     localStorage.clear();
    // }
    return (react_1.default.createElement("div", { className: "dashboard-container" },
        react_1.default.createElement("h1", null, "Dashboard"),
        react_1.default.createElement("h2", null,
            "Welcome ",
            user.username ? user.username : user.user.username,
            "!"),
        react_1.default.createElement("h3", null, "Make a quick list and e-mail it to yourself."),
        react_1.default.createElement("div", { className: "dashboard-content" },
            react_1.default.createElement("div", { className: "dashboard-list" },
                react_1.default.createElement(List_1.default, null)),
            react_1.default.createElement("div", { className: "dashboard-recipes" },
                react_1.default.createElement(Recipes_1.default, null)))));
};
exports.default = Dashboard;
