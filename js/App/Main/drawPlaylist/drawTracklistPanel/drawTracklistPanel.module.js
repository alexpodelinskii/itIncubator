import { createElem } from "../../../../common/createElem.module.js";
import { createImg } from "../../../../common/createImg.module.js";

export function drawTracklistPanel() {
    const panel = createElem('add-track-panel');

    const title = createElem('tracklist-title', 'h3');
    title.innerText = 'Tracks';

    const button = createElem('button-add-track', 'button');

    button.append(
        createImg('add-image', 'img/icons/add.svg', 'add'),
        'Add Track'
    );

    panel.append(
        title,
        button
    )
    return panel;
}