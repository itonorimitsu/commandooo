const functions = require('firebase-functions');

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.commando_res = functions.https.onRequest((request, response) => {
    const dialogflow_param = request.body.queryResult.parameters.commando_word;
    const dialogflow_user_say = request.body.queryResult.queryText;

    response.setHeader("Content-Type", "application/json");
    response.send(
        JSON.stringify({
            "fulfillmentText": '<speak><audio src="https://firebasestorage.googleapis.com/v0/b/firstapp-974d4.appspot.com/o/kiritan%2Fkonotokiwo.wav?alt=media&amp;token=c961020c-3a07-4801-af4d-ac11505fd6fb"></audio></speak>'
        })
    );
});