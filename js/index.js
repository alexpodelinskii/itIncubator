import { data } from "./data/data.module.js";
import { App } from "./App/App.module.js";

const root = document.getElementById('root');
root.append(
    App()
)