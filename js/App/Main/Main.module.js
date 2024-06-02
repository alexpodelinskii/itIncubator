import { createElem } from "../../common/createElem.module.js";
import { drawPlaylist } from "./drawPlaylist/drawPlaylist.module.js";

export function Main(playlists) {
    const mainElem = createElem('main', 'main');

    const playlistPanelElem = createElem('add-playlist-panel');

    const panelTitleElem = createElem('title', 'h1');
    panelTitleElem.innerText = 'My playlists';

    const panelButtonElem = createElem('button', 'button');
    panelButtonElem.innerText = 'Add Playlist';

    playlistPanelElem.append(
        panelTitleElem,
        panelButtonElem
    );

    const playlistsElem = createElem('playlists');
    playlists.forEach(elem => {
        playlistsElem.append(drawPlaylist(elem));
    })

    mainElem.append(
        playlistPanelElem,
        playlistsElem
    );
    return mainElem;
}