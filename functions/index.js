const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data,context)=>{
    return admin.auth().getUserByEmail(data.email).then((user)=>{
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true, 
        });
    }).then(()=>{
        return {
            message: `Succes! ${data.email} has beenn made an admin!!`,
        };
    }).catch(err => {
        console.log(err);
    });
});