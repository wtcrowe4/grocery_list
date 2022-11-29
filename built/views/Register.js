"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
const authSlice_1 = require("../features/auth/authSlice");
const Spinner_1 = __importDefault(require("../components/Spinner"));
const react_2 = __importDefault(require("react"));
const Register = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const { password, password2 } = formData;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { user, status, error, message } = (0, react_redux_1.useSelector)((state) => state.auth);
    (0, react_1.useEffect)(() => {
        document.title = 'Register';
        if (error !== null) {
            react_toastify_1.toast.error(message);
            console.log(status);
            dispatch((0, authSlice_1.reset)());
            navigate('/register', { replace: true });
        }
        if (user) {
            react_toastify_1.toast.success(message);
            navigate('/dashboard');
        }
        //dispatch(reset());
    }, [user, error, status, message, navigate, dispatch]);
    const onChange = (e) => setFormData(Object.assign(Object.assign({}, formData), { [e.target.id]: e.target.value }));
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            react_toastify_1.toast.error('Passwords do not match');
            console.log('Passwords do not match');
            dispatch((0, authSlice_1.reset)());
        }
        else {
            const newUser = formData;
            console.log(newUser);
            dispatch((0, authSlice_1.register)(newUser));
        }
    };
    if (status === 'loading') {
        return react_2.default.createElement(Spinner_1.default, null);
    }
    return (react_2.default.createElement("div", { className: "register-container" },
        react_2.default.createElement("h1", null, "Register"),
        react_2.default.createElement(fa_1.FaUser, null),
        react_2.default.createElement("h3", null, "Please create an account"),
        react_2.default.createElement("form", { className: "register-form", onSubmit: onSubmit },
            react_2.default.createElement("div", { className: "form-group" },
                react_2.default.createElement("label", { htmlFor: "username" }, "Username"),
                react_2.default.createElement("input", { type: "text", className: "form-control", id: "username", placeholder: "Enter username", onChange: e => onChange(e) })),
            react_2.default.createElement("div", { className: "form-group" },
                react_2.default.createElement("label", { htmlFor: "email" }, "Email"),
                react_2.default.createElement("input", { type: "email", className: "form-control", id: "email", placeholder: "Enter email", onChange: e => onChange(e) })),
            react_2.default.createElement("div", { className: "form-group" },
                react_2.default.createElement("label", { htmlFor: "password" }, "Password"),
                react_2.default.createElement("input", { type: "password", className: "form-control", id: "password", placeholder: "Enter password", onChange: e => onChange(e) })),
            react_2.default.createElement("div", { className: "form-group" },
                react_2.default.createElement("label", { htmlFor: "password2" }, "Confirm Password"),
                react_2.default.createElement("input", { type: "password", className: "form-control", id: "password2", placeholder: "Confirm password", onChange: e => onChange(e) })),
            react_2.default.createElement("div", { className: "form-group" },
                react_2.default.createElement("button", { type: "submit", className: "btn-block" }, "Submit")))));
};
exports.default = Register;
