const Card = require("../models/Cards");

exports.getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        console.error("Error obteniendo cartas:", error);
        res.status(500).json({ error: error.message });
    }
}
