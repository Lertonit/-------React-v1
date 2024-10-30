const express = require('express');
const router = express.Router();

router.get("/",(req,res) => {
    res.send("вот так вот");
});

module.exports = router;