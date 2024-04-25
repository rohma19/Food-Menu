const filterMenuItems = (id) => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
        if (id === 'all') {
            item.classList.remove('hide');
        } else {
            if (item.classList.contains(id)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        }
    });
};

export default filterMenuItems;
