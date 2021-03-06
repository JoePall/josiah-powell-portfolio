import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./utils/bootstrap.js";
import "./utils/bootstrap.css";
// import reportWebVitals from './reportWebVitals';
if (process.env.NODE_ENV === "production") {
  console.log("These aren't the droids you're looking for.")
  console.log = () => {};
}

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
