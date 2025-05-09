const db = require("../../database/models");

// const modelsPath = path.join(__dirname, '..', 'data', 'products.json');

module.exports = {
    detail: async(req, res) => {
        try {
            let model = await db.Product.findByPk(req.params.id, {include:["categories","files"]});
            
            res.json(model) 
        } catch (error) {
            console.log(error);
        }
    },
    products: async(req,res)=>{
        try {
            const models = await db.Product.findAll();
            
            res.json({
                count: models.length,
                models: models,
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}
