const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
    try {
        const { sender, content } = req.body;
        const message = await Message.create({ sender, content });

        res.status(201).json({ message });
    } catch (error) {
        res.status(500).json({ error: "Failed to send message" });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch messages" });
    }
};
