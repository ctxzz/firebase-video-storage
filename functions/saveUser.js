const functions = require('firebase-functions');
const serviceAccount = require('./config/service_account.json');
const admin = require('firebase-admin');

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://fir-video-storage.firebaseio.com"
    });
    admin.firestore().settings({ timestampsInSnapshots: true });
} catch(error) {
    console.log(error);
} 

const defaultUserIcon = 'https://randomuser.me/api/portraits/med/men/1.jpg';

exports.saveUser = functions.auth.user().onCreate(async user => {
    try {
        const result = await admin.firestore().doc(`users/${user.uid}`).create({
            uid: user.uid,
            displayName: user.displayName || "unkown",
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL || defaultUserIcon,
            phoneNumber: user.phoneNumber,
            providerData: {
                providerId: user.providerData[0].providerId,
                uid: user.providerData[0].uid
            }, 
            disabled: user.disabled
        });

        console.log(`Save User info! Document written at: ${result.writeTime.toDate()}`);
    } catch(error) {
        console.log(error);
    }
});