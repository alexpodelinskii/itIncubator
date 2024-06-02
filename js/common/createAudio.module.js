import { createElem } from "./createElem.module.js";

export function createAudio(src) {
    const audio = createElem('audio', 'audio');
    audio.src = src;
    audio.controls = true;
    return audio;
}
