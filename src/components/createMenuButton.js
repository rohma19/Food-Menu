import filterMenuItems from '../handlers/filterMenuItem.js';
const createMenuButton = (btnData) => {
    console.log(btnData);
    // create a button
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = btnData.text;
    btn.id = btnData.id;
    btn.classList.add('filter-btn');

    // add event to btn
    btn.addEventListener('click', () => {
        const id = btn.id;
        filterMenuItems(id);
    });

    return btn;
};

export default createMenuButton;
