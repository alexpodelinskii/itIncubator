
function draftTracklistPanel() {
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

function draftTrack(el) {
    const track = createElem('track-element', 'li')

    const trackDetails = createElem('track-details');

    const trackContainer = createElem('track-top-line');

    if (el.isHot) {
        trackContainer.append(
            draftIsHot()
        );
    }

    const trackInfo = createElem('track-info');

    const trackName = createElem('track-name');
    trackName.innerText = `${el.artistName} - ${el.trackTitle}`

    trackInfo.append(
        trackName,
        draftEditPanel()
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





