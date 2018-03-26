var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// add new participant
router.get('/participante/novo', function (req, res) {
    res.send('Adiciona novo participante (vai virar /post)');
});
// list all participants
router.get('/participante/lista', function (req, res) {
    res.send('Todos os participantes');
});
// list one participants by ID
router.get('/participante/lista/:id', function (req, res) {
    res.send('Apenas um participante');
});

module.exports = router;