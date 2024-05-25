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
    )

    main.append(
        playlistPanel
    )



    return main;
}


function createElem(classname, element = 'div') {
    const elem = document.createElement(element);
    elem.classList.add(classname);
    return elem;
}



const root = document.getElementById('root');
root.append(
    App()
)