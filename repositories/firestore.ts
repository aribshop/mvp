import * as admin from "firebase-admin";

import ServiceAccount from "../serviceAccount.json";

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(ServiceAccount as any),
    databaseURL:
      "https://sahla-365a8-default-rtdb.europe-west1.firebasedatabase.app",
  });
}

const app = admin.apps[0]!;

export const DB = app.firestore();
