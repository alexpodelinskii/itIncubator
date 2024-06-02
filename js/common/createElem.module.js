export function createElem(classname, element = 'div') {
    const elem = document.createElement(element);
    elem.classList.add(classname);
    return elem;
}
