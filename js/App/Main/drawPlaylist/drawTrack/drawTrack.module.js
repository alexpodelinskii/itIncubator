import { createElem } from "../../../../common/createElem.module.js";
import { createAudio } from "../../../../common/createAudio.module.js";
import { createImg } from "../../../../common/createImg.module.js";
import { drawEditPanel } from "../../../../common/drawEditPanel.module.js";
import { drawIsHot } from "../../../../common/utills.module.js";

export function drawTrack(el) {
    const track = createElem('track-element', 'li')

    const trackDetails = createElem('track-details');

    const trackContainer = createElem('track-top-line');

    if (el.isHot) {
        trackContainer.append(
            drawIsHot()
        );
    }

    const trackInfo = createElem('track-info');

    const trackName = createElem('track-name');
    trackName.innerText = `${el.artistName} - ${el.trackTitle}`

    trackInfo.append(
        trackName,
        drawEditPanel()
    )

    trackContainer.append(
        trackInfo,
    );

    trackDetails.append(
        trackContainer,
        createAudio(el.trackFileUrl)
    );



    track.append(
        createImg('track-cover-image', el.trackCoverImgUrl, 'track-cover'),
        trackDetails
    )
    return track;
}