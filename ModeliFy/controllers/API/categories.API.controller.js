const { where } = require("sequelize");
const db = require("../../database/models");

module.exports = {
    getCategories: async (req, res) => {
        try {
            let categories = await db.Category.findAll();

            res.json({
                count: categories.length,
                categories
            })
        } catch (error) {
            console.log(error);

        }
    },
}
