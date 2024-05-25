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
                }
            ]
        },
        {
            playlistIfo: {
                id: '1-0',
                title: 'Rap Hits 1990s',
                coverImgUrl: 'img/cardImage/image2.jpeg',
                tracksCount: 4
            },
            tracks: []
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

    const trackList = createElem('tracklist');

    trackList.append(
        draftTracklistPanel(),
    )

    playlist.append(
        draftPlaylistInfo(playist.playlistIfo),
        trackList
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