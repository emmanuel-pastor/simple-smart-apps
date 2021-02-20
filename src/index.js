import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";
import English from './assets/lang/en.json';
import French from './assets/lang/fr.json';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";

const locale = navigator.language
const language = locale.includes('fr') ? French : English

const firebaseConfig = {
    apiKey: "AIzaSyD70B6WQQrsee9usXrmRGDcxbCw2QYtP5M",
    authDomain: "simple-smart-apps.firebaseapp.com",
    projectId: "simple-smart-apps",
    storageBucket: "simple-smart-apps.appspot.com",
    messagingSenderId: "836875807176",
    appId: "1:836875807176:web:b86f5e5e84da764684f8fd",
    measurementId: "G-LHBL7G0Y5L"
};
firebase.initializeApp(firebaseConfig);
export const firebaseStorage = firebase.storage();
export const firebaseAnalytics = firebase.analytics();

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale={locale} messages={language}>
            <App/>
        </IntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
