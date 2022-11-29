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
const axios_1 = __importDefault(require("axios"));
const api_url = 'http://localhost:8080/api/list';
//Create a new list
const create = (list, token) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = yield axios_1.default.post(`${api_url}/create`, list, config);
    return response.data;
});
//Get all lists
const all = (token, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    const response = yield axios_1.default.get(`${api_url}/all`, config);
    // response.data.forEach(list => {
    //     if (list.userId === userId) {
    //         console.log(list);
    //         return list;
    //     } else {
    //         return null;
    //     }
    return response.data;
    // });
});
//Get a list
const get = (listId, token) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = yield axios_1.default.get(`${api_url}/${listId}`, config);
    return response.data;
});
//Delete a list
const deleteList = (listId, token) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            id: listId
        }
    };
    const response = yield axios_1.default.delete(`${api_url}/`, config);
    return response.data;
});
//Add an item to a list
const addItem = (item, token) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = yield axios_1.default.put(`${api_url}/addItem`, item, config);
    return response.data;
});
//Update
const update = (list, token) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = yield axios_1.default.put(`${api_url}/${list}`, list, config);
    return response.data;
});
const listService = {
    create,
    all,
    deleteList,
    get,
    addItem,
    update,
};
exports.default = listService;
