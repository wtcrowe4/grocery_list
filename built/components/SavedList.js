"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const listSlice_1 = require("../features/lists/listSlice");
const SavedList = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const listId = window.location.pathname.split('/')[2];
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const { lists } = (0, react_redux_1.useSelector)(state => state.lists ? state.lists : null);
    const [listItems, setListItems] = (0, react_2.useState)(lists.items ? lists.items : []);
    const [item, setItem] = (0, react_2.useState)('');
    const onChange = (e) => {
        e.preventDefault();
        setItem(e.target.value);
        //    console.log(listItems);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        //add list item to list
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, {}>'... Remove this comment to see the full error message
        dispatch((0, listSlice_1.updateList)(listId));
        //push item to redux state and database
        //setListItems([...listItems, item]);        
        //clear input field
        setItem('');
    };
    (0, react_2.useEffect)(() => {
        // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, {}>'... Remove this comment to see the full error message
        dispatch((0, listSlice_1.getOneList)(listId));
    }, [dispatch, listId]);
    const renderList = () => {
        if (lists.items && lists.items.length > 0) {
            return lists.items.map((item) => {
                return (react_1.default.createElement("ul", { className: "saved-list" },
                    react_1.default.createElement("li", { key: item },
                        item,
                        react_1.default.createElement("button", { className: "btn-sm", onClick: e => console.log(e) }, "x"))));
            });
        }
    };
    return (react_1.default.createElement("div", { className: "saved-list" },
        react_1.default.createElement("h1", null, lists.title),
        renderList(),
        react_1.default.createElement("form", { onSubmit: onSubmit },
            react_1.default.createElement("input", { type: "text", placeholder: "List Item", name: "listItem", id: "listItem", onChange: onChange, required: true }),
            react_1.default.createElement("input", { type: "submit", className: "btn btn-primary", value: "Add Item" })),
        react_1.default.createElement("button", { className: "btn btn-primary" }, "Save")));
};
exports.default = SavedList;
