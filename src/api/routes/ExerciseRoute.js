const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ name: "Hello Im a Exercise" })
});

module.exports = router;