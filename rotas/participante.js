var express = require('express');
var router = express.Router();

const ibmdb = require('ibm_db');

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
    const sql = "select * from TABLE(UDTF_BOLAO_2018('2018-03-23'))"
    ibmdb.open("DRIVER={DB2};DATABASE=BLUDB;UID=krj09623;PWD=1c9m3@d4p2qm06x2;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;port=50000", function (err, conn) {
        if (err) {
            /*
            On error in connection, log the error message on console 
            */
            console.error("error: ", err.message);
            reject(err);
        } else {
            conn.query(sql, function (err, result, moreResultSets) {
                console.log('RESULTADO: ', result)
                res.send(result);
            })

            conn.close(function () {
                console.log("Connection Closed");
            });
        }

    })
});
// list one participants by ID
router.get('/participante/lista/:id', function (req, res) {
    res.send('Apenas um participante');
});

module.exports = router;