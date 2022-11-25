
var config = {
  apiKey: "AIzaSyB_UfKsPjRAoEBHWi85nKmZ5J9jZe694XE",
  authDomain: "bookyourdoc-e9d9b.firebaseapp.com",
  projectId: "bookyourdoc-e9d9b",
  storageBucket: "bookyourdoc-e9d9b.appspot.com",
  messagingSenderId: "430644257924",
  appId: "1:430644257924:web:a092850819e74b45e48ed1",
  measurementId: "G-8L2TRPCFF9"
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
export default db