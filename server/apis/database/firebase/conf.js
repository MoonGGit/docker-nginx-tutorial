const admin = require('firebase-admin');
let serviceAccount = require('./docker-nginx-tutorial-66fa14151bb1.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

let db = admin.firestore();

module.exports = {
    db: db,
};
