const db = require("../../database/models");

module.exports = {
    detail: async(req, res) => {
        try {
            let model = await db.Product.findByPk(req.params.id, {
                include:["category","file"],
                attributes:{
                    exclude:["category_id","file_id"]
                }
            });
            
            res.json(model) 
        } catch (error) {
            console.log(error);
        }
    },
    products: async(req,res)=>{
        try {
            let models = await db.Product.findAll({
                include:["category","file"],
                attributes:{
                    exclude:["category_id","file_id"]
                },
                raw: true
            });

            models.forEach(model => {
                model.imageUrl = `http://localhost:3000/images/modelos/${model.image}`;
                model.url = `http://localhost:3000/api/products/detail/${model.id}`;
            });
            
            res.json({
                count: models.length,
                models: models,
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}
