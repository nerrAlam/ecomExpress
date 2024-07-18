"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// all the imports here
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// requireing all the path from .env
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
// all the exports here
exports.default = {
    port: process.env.PORT,
    dataBaseUrl: process.env.DATABASE_URL,
};
