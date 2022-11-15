// npm i firebase
// src -> create firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import secret from "./secrets"
// from these three you are able to include firebase in your react app

let app = initializeApp(secret)

export let auth = getAuth(app)