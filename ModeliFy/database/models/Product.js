// const Category = require('./Category');

module.exports = (sequelize, DataTypes)=> {

    const alias = 'Product'

    const cols = {
        name: {
            type: DataTypes.STRING(255),
            validate:{
                min: 3
            }
        },
        description: {
            type: DataTypes.STRING(255)
        },
        price: {
            type: DataTypes.INTEGER(11)
        },
        // category: {
        //     type: DataTypes.STRING(255)
        // },
        // file: {
        //     type: DataTypes.STRING(100)
        // },
        image: {
            type: DataTypes.STRING
        },
        // category_id:{
        //     type: DataTypes.INTEGER(11)
        // },
        // file_id:{
        //     type: DataTypes.INTEGER(11)
        // }
    }

    const config = {
        tableName: 'products',
        paranoid: true,
        timestamps:false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (model)=>{
        // Categorias
        Product.belongsTo(model.Category, {
            as: "category",
            foreignKey: "category_id"
        })
        // File
        Product.belongsTo(model.File, {
            as: "file",
            foreignKey: "file_id"
        })
    };

    return Product;
}