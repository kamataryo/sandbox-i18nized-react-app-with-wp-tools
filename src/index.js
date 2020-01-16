import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { setLocaleData } from "@wordpress/i18n";
import jaData from "./lang/ja.json";

const match = window.location.search.match(/^\?lang=(.*)$/);
const lang = match ? match[1] : "en";

if (lang === "ja") {
  console.log(jaData);
  setLocaleData(jaData.locale_data.messages);
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
