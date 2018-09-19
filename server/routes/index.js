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
    Page.find({title: req.param('page')},function(err,Page){
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
router.put('/page', function (req, res) {
    // checks if channel already exists
    check()
    setTimeout(() => {
        updateCreateGet()
    }, 200);
    
    // if it exists it will update
    function updateCreateGet() {

        if (exists) {
            Page.findOneAndUpdate({ title: req.body.title }, req.body, function (err, doc) {
                if (err) {
                    console.log(err)
                }
                res.json({ message: 'channel updated' });
            })
            // if it doesn't it wil create
        } else if (!exists) {
            Page.create(req.body, function (err, doc) {
                if (err) {
                    res.send(err)
                }
                res.json({ message: 'channel created' });
            })
        }
    }
})
module.exports = router;
