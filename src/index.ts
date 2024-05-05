import { Bot, Context, session } from "grammy";
import {
    type Conversation,
    type ConversationFlavor,
    conversations,
    createConversation,
} from "@grammyjs/conversations";
import config from "./config";

import connectDB from "./config/db";

import {
    buy,
    root,
    sell,
    setting,
    wallet,
} from "./controllers";
import { latestBroadcast } from "./services/broadcast";

type CusContext = Context & ConversationFlavor;

const bot = new Bot<CusContext>(config.TG_BOT_TOKEN);

(async function () {
    try {
        await connectDB();

        bot.use(
            session({
                initial() {
                    return {};
                },
            })
        );
        
    } catch (err) {
        console.log(err);
    }
})();