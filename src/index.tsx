import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsWfy26x-E3wWgdNHN938RwmtofPFX3cE",
  authDomain: "funnycl.firebaseapp.com",
  projectId: "funnycl",
  storageBucket: "funnycl.appspot.com",
  messagingSenderId: "606207082154",
  appId: "1:606207082154:web:1c99bbce79da169dd21ad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
