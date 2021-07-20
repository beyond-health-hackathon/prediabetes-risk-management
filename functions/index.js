const functions = require('firebase-functions');
const app = require('express')();

const {
    getUserInfo
} = require('./APIs/userinfo')

app.get('/userinfo', getUserInfo);
exports.api = functions.https.onRequest(app);