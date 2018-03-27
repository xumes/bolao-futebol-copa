var express = require('express');
var router = express.Router();

const ibmdb = require('ibm_db');
var participantesService  = require('../services/participantesService');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// add new participant
router.get('/participante/novo', function (req, res) {
    
    res.send('Em breve vamos usar o POST para cadastrar um novo participante');
});
// list all participants
router.get('/participante/lista', function (req, res) {
    participantesService.getParticipantsAll().then((result) => {
        res.send(result)
    })
});
// list one participants by ID
router.get('/participante/lista/:id', function (req, res) {
    res.send('Apenas um participante');
});

module.exports = router;