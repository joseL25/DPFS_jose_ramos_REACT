const fs = require("fs");
// const path = require("path");
const db = require("../database/models");
// const {where} = require('sequelize');
const { validationResult } = require('express-validator');
const { log } = require("console");


// const modelsPath = path.join(__dirname, '..', 'data', 'products.json');

module.exports = {
    product: async(req, res) => { // vista del producto
        try {
            const modelFound = await db.Product.findByPk(req.params.id);
            
            res.render('products/detail', { modelFound });  
        } catch (error) {
            console.log(error);
        }
    },
    create: async(req, res) => { // vista del formulario de creacion del producto
        const categories = await db.Category.findAll();
        const files = await db.File.findAll();
        res.render("products/create",{categories, files});
    },
    save: async(req, res) => { // metodo para que se agregue el nuevo producto en la base de datos
        try {
            const categories = await db.Category.findAll();
            const files = await db.File.findAll();
            const resultValidator = validationResult(req);
            if(resultValidator.isEmpty()){
                let newModel = {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    category_id: req.body.category,
                    file_id: req.body.file,
                    image: req.file?.filename || "default.png"
                };
                await db.Product.create(newModel)
        
                res.redirect("/");

            } else{
                return res.render('products/create',{
                    errors: resultValidator.mapped(), 
                    old: req.body, categories, files
                });
            }
            
        } catch (error) {
            console.log(error);
            
        }
    },
    edit: async(req, res) => { // vista del formulario de edicion del producto
        try {
            const categories = await db.Category.findAll();
            const files = await db.File.findAll();
            let modelEdit = await db.Product.findByPk(req.params.id)
    
            res.render("products/edit",{modelEdit, files, categories});
        } catch (error) {
            console.log(error);
        }
    },
    update:async(req,res)=>{ // metodo para actualizar el producto una vez ya haya sido editado
        try {
            // traigo el modelo a editar de la base de datos
            let modelEdit = await db.Product.findByPk(req.params.id);

            // traigo las categorias
            const categories = await db.Category.findAll();

            // traigo los tipos de archivos
            const files = await db.File.findAll();

            // hago uso de express-validator para las validaciones del backend
            const resultValidator = validationResult(req);

            if(resultValidator.isEmpty()){
                // acá vendria la creacion del producto editado
                // en cada campo, el producto se modifica con la informacion que viene del formulario
                // en caso de que algun campo venga vacio, 
                // se usa la informacion del producto que tenia en ese campo antes de ser modificado
                let modUpdate = {
                    name: req.body.name || modelEdit.name,
                    description: req.body.description || modelEdit.description,
                    price: req.body.price || modelEdit.price,
                    category_id: req.body.category || modelEdit.category_id,
                    file_id: req.body.file || modelEdit.file_id,
                    image: req.file?.filename || modelEdit.image,
                }
                
                // se actualiza el producto con su respectivo id
                await db.Product.update(modUpdate, {
                    where:{
                        id: req.params.id
                    }
                })

                // una vez actualizado el producto se redirecciona a la vista del home o pagina principal
                res.redirect('/');
            } else{
                return res.render('products/edit',{
                    errors: resultValidator.mapped(), 
                    old: req.body, categories, files, modelEdit
                });
            }

        } catch (error) {
            console.log(error);
        }
    },
    destroy:async(req,res)=>{ // metodo para eliminar el producto
        //OPCIONAL
        // let modelToDelete = await db.Product.findByPk(req.params.id);
        // if (modelToDelete.image != "default.png") {
        //     fs.unlinkSync(path.join(__dirname,`../public/images/modelos/${modelToDelete.imagen}`));
        // }
        try {
            const modelDelete = await db.Product.destroy({
                where: {
                    id: req.params.id
                }
            })
            console.log('modelo borrado', modelDelete);
            // redireccionar
            res.redirect('/');
        } catch (error) {
            console.log(error);
            
        }

    }
}
