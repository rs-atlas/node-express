import dotenv from "dotenv";
dotenv.config();

import { GeekNewsRSS } from "./geeknews.js"
import { sendMessage } from "./slack.js";

sendMessage("xoxb-3420520243-6279303635248-LylSoSpFFivD3fSMIS8hueFz", "C067WTGCK9P", await GeekNewsRSS())