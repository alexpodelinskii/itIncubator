import { createElem } from "../common/createElem.module.js";
import { Header } from "./Header/Header.module.js";
import { Main } from "./Main/Main.module.js";
import { data } from "../data/data.module.js";


export function App() {
    const container = createElem('App');

    container.append(
        Header(),
        Main(data.playlists)
    )

    return container;
};