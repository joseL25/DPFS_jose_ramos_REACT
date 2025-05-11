const db = require('../../database/models');

const usersControllers = {
    getUsers: async(req,res)=>{
        try {
            let users = await db.User.findAll({
                attributes:{exclude:["password"]},
                raw:true
            });

            // const usersMaps = users.map(user => {
            //     return {
            //         ...user,
            //         urlAvatar:`http://localhost:3000/images/avatar/profiles/${user.avatar}`,
            //         url:`http://localhost:3000/api/users/profile/${user.id}`
            //     }
            // });

            users.forEach(user => {
                user.urlAvatar = `http://localhost:3000/images/avatar/profiles/${user.avatar}`;
                user.url = `http://localhost:3000/api/users/profile/${user.id}`;
            });

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