import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./context/UserContext";
import { SearchProvider } from "./context/SearchContext";
import { FavProvider } from "./context/FavContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavProvider>
    <SearchProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SearchProvider>
  </FavProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
