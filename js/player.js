const data = {
    playlists: [
        {
            playlistIfo: {
                id: '1-0',
                title: 'Hip-Hop Hits',
                coverImgUrl: 'img/cardImage/image1.jpeg',
                tracksCount: 4
            },
            tracks: [
                {
                    trackId: '1',
                    artistName: 'Eminem',
                    trackTitle: 'Rap God',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/track1.jpeg',
                    trackFileUrl: 'audio/Eminem - Rap God.mp3'
                },
                {
                    trackId: '2',
                    artistName: '50 cent',
                    trackTitle: 'In da Club',
                    isHot: false,
                    trackCoverImgUrl: 'img/cardImage/trackList/track2.jpeg',
                    trackFileUrl: 'audio/50cent%20-%20In%20da%20club.mp3'
                },
                {
                    trackId: '3',
                    artistName: 'DMX',
                    trackTitle: 'X Gon\' Give It To Ya',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/track3.jpeg',
                    trackFileUrl: 'audio/DMX%20-%20X%20Gon\'%20Give%20It%20To%20Ya.mp3'
                },
                {
                    trackId: '4',
                    artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
                    trackTitle: 'You Don\'t Know',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/track4.jpeg',
                    trackFileUrl: "audio/Eminem%20-%20You%20Don't%20Know%20(feat.%2050%20cent,%20Lloyd%20Banks%20and%20Cashis).mp3"
                },

            ]
        },
        {
            playlistIfo: {
                id: '1-0',
                title: 'Rap Hits 1990s',
                coverImgUrl: 'img/cardImage/image2.jpeg',
                tracksCount: 4
            },
            tracks: [
                {
                    trackId: '5',
                    artistName: 'Public Enemy',
                    trackTitle: 'Fight the Powe',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/track5.jpeg',
                    trackFileUrl: 'audio/Public%20Enemy%20-%20Fight%20The%20Power.mp3'
                },
                {
                    trackId: '6',
                    artistName: 'Vanila Ice',
                    trackTitle: 'Ice Ice Baby',
                    isHot: false,
                    trackCoverImgUrl: 'img/cardImage/trackList/track6.jpeg',
                    trackFileUrl: 'audio/Vanila%20Ice%20-%20Ice%20Baby.mp3'
                },
                {
                    trackId: '7',
                    artistName: 'Brand Nubian',
                    trackTitle: 'You Can’t Touch This',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/track7.jpeg',
                    trackFileUrl: 'audio/Mc%20Hammer%20-%20You%20Can\'t%20Touch%20This.mp3'
                },
                {
                    trackId: '8',
                    artistName: 'Brand Nubian',
                    trackTitle: 'Brand Nubian',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/track8.jpeg',
                    trackFileUrl: "audio/Brand%20Nubian%20-%20Brand%20Nubian.mp3"
                },

            ]
        }
    ]
};


function App() {
    const container = createElem('App');

    container.append(
        Header(),
        Main()
    )

    return container;
};

function Header() {
    const header = createElem('header', 'header');
    const container = createElem('header-container');

    const headerLogo = createElem('logoImg', 'img');
    headerLogo.src = 'img/logo/logo.svg';
    headerLogo.alt = 'logo';

    const headerName = createElem('logo-name');
    headerName.innerText = 'InPlayer';

    container.append(
        headerLogo,
        headerName
    );

    header.append(container);

    return header;
}

function Main() {
    const main = createElem('main', 'main');

    const playlistPanel = createElem('add-playlist-panel');

    const panelTitle = createElem('title', 'h1');
    panelTitle.innerText = 'My playlists';

    const panelButton = createElem('button', 'button');
    panelButton.innerText = 'Add Playlist';

    playlistPanel.append(
        panelTitle,
        panelButton
    );

    const playlists = createElem('playlists');
    data.playlists.forEach(elem => {
        playlists.append(draftPlaylist(elem));
    })

    main.append(
        playlistPanel,
        playlists
    );
    return main;
}



function draftPlaylist(playist) {
    const playlist = createElem('playlist', 'article');

    const trackListContainer = createElem('tracklist');

    const tracklist = createElem('list', 'ul');
    playist.tracks.forEach(el => {
        tracklist.append(draftTrack(el));
    })

    trackListContainer.append(
        draftTracklistPanel(),
        tracklist
    )

    playlist.append(
        draftPlaylistInfo(playist.playlistIfo),
        trackListContainer
    )

    return playlist;
}


function draftPlaylistInfo(info) {
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
        draftEditPanel()
    )
    return playlistInfo;
}

function draftEditPanel() {
    const panel = createElem('buttons-container');

    const editBtn = createElem('btn', 'button');
    editBtn.append(
        createImg('button-icon', 'img/icons/edit.svg', 'edit')
    )

    const delBtn = createElem('btn', 'button');
    delBtn.append(
        createImg('button-icon', 'img/icons/basket.svg', 'delete')
    );

    panel.append(
        editBtn,
        delBtn
    )

    return panel;
}


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

const root = document.getElementById('root');
root.append(
    App()
)



function createElem(classname, element = 'div') {
    const elem = document.createElement(element);
    elem.classList.add(classname);
    return elem;
}

function createImg(classname, src, alt) {
    const image = createElem(classname, 'img');
    image.src = src;
    image.alt = alt;
    return image;
}

function createAudio(src) {
    const audio = createElem('audio', 'audio');
    audio.src = src;
    audio.controls = true;
    return audio;
}
function draftIsHot() {
    return createImg('track-status', 'img/icons/hot.svg', 'hot');
}