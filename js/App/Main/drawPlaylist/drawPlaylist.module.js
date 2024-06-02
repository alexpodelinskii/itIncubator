import { createElem } from "../../../common/createElem.module.js";
import { drawPlaylistInfo } from "./drawPlaylistInfo/drawPlaylistInfo.module.js";
import { drawTrack } from "./drawTrack/drawTrack.module.js";
import { drawTracklistPanel } from "./drawTracklistPanel/drawTracklistPanel.module.js";

export function drawPlaylist(playist) {
    const playlist = createElem('playlist', 'article');

    const trackListContainer = createElem('tracklist');

    const tracklist = createElem('list', 'ul');
    playist.tracks.forEach(el => {
        tracklist.append(drawTrack(el));
    })

    trackListContainer.append(
        drawTracklistPanel(),
        tracklist
    )

    playlist.append(
        drawPlaylistInfo(playist.playlistIfo),
        trackListContainer
    )

    return playlist;
}