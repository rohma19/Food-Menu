import { data, dom } from '../data.js';
import createMenuItem from '../components/createMenuItem.js';
import createMenuButton from '../components/createMenuButton.js';

const loadHandler = () => {
    // show buttons
    data.buttons.forEach((btnData) => {
        const btnDom = createMenuButton(btnData);
        dom.btnContainer.append(btnDom);
    });
    // show the item by default
    data.menu.forEach((itemData) => {
        const itemDom = createMenuItem(itemData);
        dom.sectionCenter.append(itemDom);
    });
};

export default loadHandler;
