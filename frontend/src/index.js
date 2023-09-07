import { render } from "react-dom";
import App from "./container/App";
import { BrowserRouter } from "react-router-dom";

// import "./css/bootstrap-rtl.min.css"
// import "./css/material-design-iconic-font.min.css"
// import "./css/style.css"
// import "./css/all.min.css"
import 'react-toastify/dist/ReactToastify.css';


render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"))