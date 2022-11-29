"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
//import ListForm from '../components/ListForm';
const Recipes_1 = __importDefault(require("../components/Recipes"));
const SavedList_1 = __importDefault(require("../components/SavedList"));
const react_2 = __importDefault(require("react"));
const ListDashboard = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    //const dispatch = useDispatch();
    const { user } = (0, react_redux_1.useSelector)((state) => state.auth ? state.auth : null);
    //const { lists } = useSelector(state => state.lists ? state.lists : null);
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
    return (react_2.default.createElement("div", { className: "dashboard-container" },
        react_2.default.createElement("h1", null, "Dashboard"),
        react_2.default.createElement("h2", null,
            "Welcome ",
            user.username ? user.username : user.user.username,
            "!"),
        react_2.default.createElement("h3", null, "Edit a saved list here."),
        react_2.default.createElement("div", { className: "dashboard-content" },
            react_2.default.createElement("div", { className: "dashboard-list" },
                react_2.default.createElement(SavedList_1.default, null)),
            react_2.default.createElement("div", { className: "dashboard-recipes" },
                react_2.default.createElement(Recipes_1.default, null)))));
};
exports.default = ListDashboard;
