/**
 * Created by chito on 17/10/2016.
 */
var localStrategy = require('passport-local');
var bCrypt =  require('bcrypt-nodejs');

//temporary data store
var users  = {};

module.exports = function(passport){

    passport.serializeUser(function(user,done){
       console.log('serialize user:',user.username);

        return done(null,user.username);
    });

    passport.deserializeUser(function(username,done){
        return done('we have  not implemented this',false);
    });

    passport.use('login',new localStrategy({
        passReqToCallback: true
    },
        function(req,username,password,done){
            return done('we have  not implemented this',false);
        }
    ));
}
