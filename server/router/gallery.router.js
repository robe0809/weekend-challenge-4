const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM gallery`;
    pool.query(queryText) 
    .then((result) => {
        console.log('get all request', result.rows);
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('get all error', err);
    })
})

module.exports = router;