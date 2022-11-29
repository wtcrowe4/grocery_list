"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
//import listSlice from '../features/lists/listSlice';
const listSlice_1 = require("../features/lists/listSlice");
const MyLists = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    // const { user } = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
    const user = (0, react_redux_1.useSelector)((state) => state.auth ? state.auth : null);
    const lists = (0, react_redux_1.useSelector)((state) => state.lists);
    //const [myLists, setMyLists] = useState([])
    const [listName, setListName] = (0, react_2.useState)('');
    (0, react_2.useEffect)(() => {
        document.title = 'My Lists';
        if (!user) {
            navigate('/login', { replace: true });
        }
        dispatch((0, listSlice_1.getMyLists)(user._id));
    }, [user, navigate, dispatch]);
    //Fix error on welcome message when user is null
    if (!user) {
        return null;
    }
    const onChange = (e) => setListName(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        const newList = {
            title: listName,
            userId: user.user.user._id
        };
        console.log(listName);
        console.log(newList);
        //listSlice.addList(newList);
        dispatch((0, listSlice_1.createList)(newList));
        //clear input field
    };
    const onDeleteClick = (e, id) => {
        e.preventDefault();
        dispatch((0, listSlice_1.deleteList)(id));
        //update list
        dispatch((0, listSlice_1.getMyLists)(user.user._id));
    };
    const renderLists = () => {
        if (lists.lists.length === 0) {
            return react_1.default.createElement("p", null, "You have no lists");
        }
        else {
            return (react_1.default.createElement("ul", null, lists.lists.map((list) => {
                return (react_1.default.createElement("div", { key: list._id },
                    react_1.default.createElement("a", { href: `/dashboard/${list._id}` },
                        react_1.default.createElement("li", { key: list._id }, list.title)),
                    react_1.default.createElement("button", { className: "btn btn-sm", onClick: e => onDeleteClick(e, list._id) }, "Delete")));
            })));
        }
    };
    //     return (
    //        <div>
    //            <ul>
    //                            <a key={list._id} href={'/dashboard'}>
    //                                <li key={myLists._id}>{myLists.title}</li> 
    //                            </a>
    //            </ul>
    //        </div>
    //    )
    return (react_1.default.createElement("div", { className: "form" },
        react_1.default.createElement("h2", null, "My Lists"),
        react_1.default.createElement("h3", null, "Saved lists on your account."),
        react_1.default.createElement("form", { onSubmit: e => onSubmit(e) },
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "listName" }, "Create a New List"),
                react_1.default.createElement("input", { type: "text", name: "listName", id: "listName", onChange: onChange, defaultValue: listName })),
            react_1.default.createElement("button", { type: "submit", className: "btn btn-primary" }, "Create List")),
        renderLists()));
};
exports.default = MyLists;
