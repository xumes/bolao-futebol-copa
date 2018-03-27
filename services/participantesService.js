const ibmdb = require('ibm_db')

exports.getParticipantsAll = () => {
    let promise = new Promise((resolve, reject) => {
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
                    resolve(result);
                })

                conn.close(function () {
                    console.log("Connection Closed");
                });
            }

        })
    })
    return promise
}