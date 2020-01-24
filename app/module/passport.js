// var passport = require('passport')
// const bcrypt = require('bcrypt')
// var LocalStrategy = require('passport-local').Strategy
// const model = require('../models/model_auth')

// var init = function() {
//     // used to serialize the user for the session
//     passport.serializeUser(function(req, user, done) {
//         var data = { id: user.id_panel_users, username: user.username, role: user.role, groups: user.groups }
//         done(null, data);
//     });
//     // used to deserialize the user
//     passport.deserializeUser(async function(req, data, done) {
//         var [resFind, errFind] = await model.byid(data.id);
//         if (errFind)
//             return done(null, false);
//         done(null, data);
//     });

//     passport.use('local',
//         new LocalStrategy({ passReqToCallback: true },
//             async function(req, username, password, done) {
//                 var [user, err] = await model.get(username);
//                 // console.log(req.body.password)
//                 if (err || !user) {
//                     return done(null, false);
//                 }
//                 var compare = bcrypt.compareSync(req.body.password, user.password)
//                 if (!compare) {
//                     return done(null, false);
//                 }
//                 if (user.role != 1) {
//                     var [groups, err] = await model.groups(user.id_panel_users)
//                     var arr_group = []
//                     for (let index = 0; index < groups.length; index++) {
//                         const element = groups[index];
//                         arr_group.push(element.name)
//                     }
//                     user["groups"] = arr_group
//                 }
//                 await model.userLogin(user.id_panel_users)
//                 return done(null, user);
//             }
//         )
//     )
//     return passport
// };

// module.exports = init()