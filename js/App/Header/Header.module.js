import { createElem } from "../../common/createElem.module.js";

export function Header() {
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