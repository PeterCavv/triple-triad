const Element = require("../models/Element");

exports.getElements = async (req, res) => {
    try {
        const elements = await Element.find();
        res.json(elements);
    } catch (error) {
        console.error("Error obteniendo elementos:", error);
        res.status(500).send("Hubo un error obteniendo los elementos");
    }
}