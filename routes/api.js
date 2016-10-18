/**
 * Created by chito on 16/10/2016.
 */
var express = require('express');
var router = express.Router();

router.use(function(req,res,next){
    if(req.method === "GET"){
        return next();
    }

    if(!req.isAuthenticated()){
        return res.redirect('/#login');
    }

    //user authenticate
    return next();
});

router.route('/posts')
    .get(function(req,res){
        res.send({
            message: 'TODO return all post'
        });
    })
    .post(function(req,res){
        res.send({
           message: 'TODO create new post'
        });
    });

router.route('/posts/:id')
    .get(function(req,res){
        res.send({
            message: 'TODO return post with ID ' + req.params.id
        });
    })
    .put(function(req,res){
        res.send({
            message: 'TODO update post with ID ' + req.params.id
        });
    })
    .delete(function(req,res){
        res.send({
            message: 'TODO delete post with ID ' + req.params.id
        });
    });


module.exports = router;