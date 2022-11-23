const mongoose = require('mongoose');

const messageModel = mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        content: { type: string, trim: true },
        chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },
    },
    {
        timestamp: true,
    }
);

const Message = mongoose.model("Message", messageModel);

model.exports = Message;