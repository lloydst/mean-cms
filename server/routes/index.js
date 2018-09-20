var express = require('express');
var router = express.Router();
var Page = require('../models/page');
var Footer = require('../models/footer');
var Header = require('../models/header')
var exists = false
/* GET home page. */
router.get('/', function (req, res) {
    res.send('server responds with a resource');
});
/*
 * -------------------------------------------------------------
 * PAGE ROUTES
 * -------------------------------------------------------------
 */
/**
 * get single page
 */
router.get('/page', function (req, res) {
    Page.find(function (err, Pages) {
        if (err) {
            console.log(err)
        }
        res.send(Pages)
    })
})
router.get('/page/:page', function (req, res) {
    Page.find({ title: req.params.page }, function (err, Page) {
        if (err) {
            console.log(err)
        }
        res.send(Page)
    })
})
router.post('/page', function (req, res) {
    Page.create(req.body, function (err, doc) {
        if (err) {
            res.send(err)
        } else {
            res.send(doc);
        }

    })
})
router.put('/page', function (req, res) {

    Page.findOneAndUpdate({ title: req.body.title }, req.body, function (err, page) {
        if (err) {
            res.send(err)
        }
        res.send(page)
    })


    /**
     * check for page with the same name
     * if it doesn't end with -edit or -draft
     * don't create & send error
     * if it does have a document with the same name find its _id update that with the original req.body
     */
})
/*
 * -------------------------------------------------------------
 * FOOTER ROUTES
 * -------------------------------------------------------------
 */
router.get('/footer', function (req, res) {
    Footer.find(function (err, doc) {
        if (err) {
            res.send(err)
        }
        res.send(doc)
    })
})
router.post('/footer',function (req,res) {
    Footer.create(req.body,function(err,foot) {
        if(err) {
            res.send(err)
        }
        res.send(foot)
    })
})
/*
 * -------------------------------------------------------------
 * HEADER ROUTES
 * -------------------------------------------------------------
 */
router.get('/header', function (req, res) {
    Header.find(function (err, doc) {
        if (err) {
            res.send(err)
        }
        res.send(doc)
    })
})
router.post('/header', function (req, res) {
    Header.create(req.body, function (err, head) {
        if (err) {
            res.send(err)
        }
        res.send(head)
    })
})
module.exports = router;
