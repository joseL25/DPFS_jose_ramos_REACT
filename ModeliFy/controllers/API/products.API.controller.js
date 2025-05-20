const { where } = require("sequelize");
const db = require("../../database/models");

module.exports = {
    detail: async (req, res) => {
        try {
            let model = await db.Product.findByPk(req.params.id, {
                include: ["category", "file"],
                attributes: {
                    exclude: ["category_id", "file_id"]
                }
            });

            const modelDetail = model.toJSON();

            // Agregar campos adicionales
            modelDetail.imageUrl = `http://localhost:3000/images/modelos/${model.image}`;

            res.json(modelDetail);
        } catch (error) {
            console.log(error);
        }
    },
    products: async (req, res) => {
        try {
            let models = await db.Product.findAll({
                include: ["category", "file"],
                attributes: {
                    exclude: ["category_id", "file_id"]
                },
                // raw: true
            });

            const modelUrls = models.map(model => {
                return {
                    ...model.toJSON(),
                    imageUrl: `http://localhost:3000/images/modelos/${model.image}`,
                    url: `http://localhost:3000/api/products/detail/${model.id}`,
                }
            });

            let countByCategory = await db.Product.findAll({
                attributes: [
                    "category_id",
                    [db.sequelize.fn("COUNT", db.sequelize.col("Product.id")), "count"],
                ],
                include: [
                    {
                        model: db.Category,
                        as: "category",
                        attributes: ["name"],
                    },
                ],
                group: ["category_id", "category.id"],
                raw: true,
            });

            // Transformar a objeto
            let countObject = {};
            countByCategory.forEach((item) => {
                countObject[item["category.name"]] = parseInt(item.count);
            });

            res.json({
                count: modelUrls.length,
                countByCategory: countObject,
                models: modelUrls,
            })
        } catch (error) {
            console.log(error);

        }
    },
    lastProduct: async (req, res) => {
        try {
            let model = await db.Product.findOne({
                include: ["category", "file"],
                attributes: {
                    exclude: ["category_id", "file_id"]
                },
                order: [['id', 'DESC']]
            });

            const lastModel = model.toJSON();

            // Agregar campos adicionales
            lastModel.imageUrl = `http://localhost:3000/images/modelos/${model.image}`;

            res.json(lastModel)
        } catch (error) {
            console.log(error);
        }
    },
}
