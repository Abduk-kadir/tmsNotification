var admin = require("firebase-admin");
var serviceAccount=require('./tmsapp-53ebc-firebase-adminsdk-9dlrn-5e6c5d76f6.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
const messaging=admin.messaging()  
module.exports=messaging