// import {
//   getAuth,
//   connectAuthEmulator,
//   onAuthStateChanged,
// } from "firebase/auth";
import { defineNuxtPlugin, useRuntimeConfig } from "#imports";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
// import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagingSenderId,
    appId: config.firebaseAppId,
    mode: config.firebaseMode,
  };

  const app = initializeApp(firebaseConfig, "client");
  const firestore = getFirestore(app);
  // const auth = getAuth(app);
  // const functions = getFunctions(app);
  // const analytics = getAnalytics(app);

  if (config.firebaseMode === "dev") {
    connectFirestoreEmulator(firestore, "localhost", 8080);
    // connectAuthEmulator(auth, "http://localhost:9099");
    // connectFunctionsEmulator(functions, "localhost", 5001);
  }


  return {
    provide: {
      clientFirestore: firestore,
      // clientAuth: auth,
      // clientAnalytics: analytics,
    },
  };
});
