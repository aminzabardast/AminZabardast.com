import ReactDOM from "react-dom";
import App from "./components/App";

const appInDom = document.getElementById('app')
const root = ReactDOM.createRoot(appInDom)
root.render(<App />)
