const db = require('../../database/models');

const usersControllers = {
    getUsers: async(req,res)=>{
        try {
            const users = await db.User.findAll({attributes:{exclude:["password"]}});

            res.json({
                count: users.length,
                users: users,
            });
        } catch (error) {
            console.log(error);
            
        }
    },
    getProfile: async(req,res)=>{
        try {
            const user = await db.User.findByPk(req.params.id, {attributes:{exclude:["password"]}});
            res.json(user)
        } catch (error) {
            console.log(error);
            
        }
    },
}

module.exports = usersControllers;