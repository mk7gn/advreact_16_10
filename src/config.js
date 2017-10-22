import firebase from 'firebase'

export const appName = 'advreact-4303b'

firebase.initializeApp({
    apiKey: "AIzaSyBfoQIRlS5EJWZTOHXgcP9xFy2m-wWRYfI",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: "",
    messagingSenderId: "665447136184"
})