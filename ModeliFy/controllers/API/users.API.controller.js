const db = require('../database/models')

const usersControllers = {
    getUsers: async(req,res)=>{
        try {
            await db.User.findAll();
            res.JSON({
                count: users.length,
                users: users,
            });
        } catch (error) {
            console.log(error);
            
        }
    },
    getProfile:(req,res)=>{
        res.render('../views/users/profile', {user: req.session.userLogged});
    },
}

module.exports = usersControllers;