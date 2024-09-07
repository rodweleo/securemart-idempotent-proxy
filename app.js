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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const fetchAllProducts_1 = require("./functions/fetchAllProducts");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*"
}));
app.get("/proxy", (req, res) => {
    res.send("Server is getting requests");
});
app.get("/proxy/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, fetchAllProducts_1.fetchAllProducts)();
        res.send(response);
    }
    catch (e) {
        res.send([]);
    }
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`[server]: server is listening in port ${PORT}`);
});
