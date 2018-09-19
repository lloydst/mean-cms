var express = require('express');
var router = express.Router();
var Page = require('../models/page');
var exists = false
/* GET home page. */
router.get('/', function(req, res) {
  res.send('server responds with a resource');
});

/**
 * get single page
 */
router.get('/page', function(req, res) {
    Page.find(function(err,Pages) {
        if (err) {
            console.log(err)
        }
        res.send(Pages)
    })
})
router.get('/page/:page', function(req,res) {
    Page.find({title: req.params.page},function(err,Page){
        if(err) {
            console.log(err)
        }
        res.send(Page)
    })
})
router.post('/page',function(req,res){
    Page.create(req.body, function (err, doc) {
        if (err) {
            res.send(err)
        } else {
            res.send(doc);
        }

    })
})
/**
 * new page
 */
router.put('page', function(req, res) {
    /**
     * check for page with the same name
     * if it doesn't end with -edit or -draft
     * don't create & send error
     * if it does have a document with the same name find its _id update that with the original req.body
     * 
     * 
     */
    
})
module.exports = router;
