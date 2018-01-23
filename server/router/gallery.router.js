const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// gets all photos from database
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM gallery`;
    pool.query(queryText) 
    .then((result) => {
        console.log('get all request', result.rows);
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('get all error', err);
        res.sendStatus(500);
    })
});

// updates views
router.put('/:id', (req, res) => {
    let queryText = `UPDATE gallery SET views=(gallery.views + 1) WHERE id=$1`; 
    pool.query(queryText, [req.params.id])
    .then((result) => {
        console.log('successful update', result);
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log('error on update', err);
        res.sendStatus(500);
    });
});

// updates likes
router.put('/views/:id', (req, res) => {
    let queryText = `UPDATE gallery SET likes=(gallery.likes + 1) WHERE id=$1`; 
    pool.query(queryText, [req.params.id])
    .then((result) => {
        console.log('successful update', result);
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log('error on update', err);
        res.sendStatus(500);
    });
});

// posts comments
router.post('/', (req, res) => {
    let queryText = 'INSERT INTO info (name, comment) VALUES ($1, $2)';
    console.log('req.body', req.body);
    pool.query(queryText, [req.body.name, req.body.comment])
    .then((result) => {
        console.log('successful post ', result);
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('error on post', err);
        res.sendStatus(500);
    });
});

// gets comments
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM info`;
    pool.query(queryText) 
    .then((result) => {
        console.log('get all request', result.rows);
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('get all error', err);
        res.sendStatus(500);
    });
});

module.exports = router;