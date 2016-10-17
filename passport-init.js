/**
 * Created by chito on 17/10/2016.
 */
var localStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

//temporary data store
var users  = {};

module.exports = function(passport){

    passport.serializeUser(function(user,done){
       console.log('serialize user:',user.username);

        return done(null,user.username);
    });

    passport.deserializeUser(function(username,done){
        return done(null,users[username]);
    });

    passport.use('login',new localStrategy({
        passReqToCallback: true
    },
        function(req,username,password,done){
            //Verifica que el usuario exista
            if(!users[username]){
                return done('El usuario no existe.',false);
            }

            //Valida si el password es correcto
            if(!isValidPassword(users[username],password)){
                return done('Contraseña invalida.',false);
            }

            console.log('Login correcto');

            return done(null,users[username]);
        }
    ));

    passport.use('signup',new localStrategy({
        passReqToCallback: true
    },
        function(req,username,password,done){

            //Verifica si el usuario ya existe
            if(users[username]){
                return done('El usuario ya existe.',false);
            }

            //Agregra usuario
            users[username] = {
                username: username,
                password: createHash(password)
            }

            return done(null,users[username]);
        }
    ));

    var isValidPassword = function(user,password){
        bCrypt.compare(password,user.password);
    }

    /**
     * Genera has usando bCrypt
     *
     * @param password  Pass a aplicar hash
     * @returns {hash}  Pass con hash
     */
    var createHash = function(password){
        return bCrypt.hashSync(password,bCrypt.genSaltSync(10),null);
    }
}
