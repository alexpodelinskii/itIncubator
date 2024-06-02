import { createElem } from "../../../../common/createElem.module.js";
import { drawEditPanel } from "../../../../common/drawEditPanel.module.js";
import { createImg } from "../../../../common/createImg.module.js";

export function drawPlaylistInfo(info) {
    const playlistInfo = createElem('playlist-info');

    const playlistCoverImage = createImg('playlist-cover-image', info.coverImgUrl, 'cover');

    const playlistDescription = createElem('playlist-description');

    const playlistTitle = createElem('title', 'h2');
    playlistTitle.innerText = info.title;

    const playlistCounts = createElem('tracks-count');
    playlistCounts.innerText = `${info.tracksCount} tracks`;

    playlistDescription.append(
        playlistTitle,
        playlistCounts
    )

    playlistInfo.append(
        playlistCoverImage,
        playlistDescription,
        drawEditPanel()
    )
    return playlistInfo;
}