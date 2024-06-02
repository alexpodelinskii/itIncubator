import { createElem } from "./createElem.module.js";
import { createImg } from "./createImg.module.js";

export function drawEditPanel() {
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