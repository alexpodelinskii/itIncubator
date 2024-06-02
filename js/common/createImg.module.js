import { createElem } from "./createElem.module.js";

export function createImg(classname, src, alt) {
    const image = createElem(classname, 'img');
    image.src = src;
    image.alt = alt;
    return image;
}
