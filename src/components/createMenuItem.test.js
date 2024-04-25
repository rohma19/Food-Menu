import createMenuItem from './createMenuItem.js'; // Adjust the path accordingly

describe('createMenuItem', () => {
    let item;
    const itemData = {
        category: 'main-course',
        src: 'path/to/image.jpg',
        title: 'Test Item',
        price: 10.99,
        desc: 'This is a test item description.',
    };

    beforeEach(() => {
        // Create a new menu item before each test
        item = createMenuItem(itemData);
    });

    afterEach(() => {
        // Clean up after each test
        item = null;
    });

    it('should create a menu item with correct structure and data', () => {
        expect(item).toBeDefined();
        expect(item.nodeName).toBe('ARTICLE');
        expect(item.classList.contains('menu-item')).toBe(true);
        expect(item.classList.contains(itemData.category)).toBe(true);

        // Check image
        const img = item.querySelector('img');
        expect(img).toBeDefined();
        expect(img.classList.contains('photo')).toBe(true);
        expect(img.src).toBe(itemData.src);
        expect(img.alt).toBe(itemData.title);

        // Check item info container
        const infoContainer = item.querySelector('.item-info');
        expect(infoContainer).toBeDefined();

        // Check header
        const header = infoContainer.querySelector('header');
        expect(header).toBeDefined();

        // Check title
        const title = header.querySelector('h4');
        expect(title).toBeDefined();
        expect(title.innerText).toBe(itemData.title);

        // Check price
        const price = header.querySelector('.price');
        expect(price).toBeDefined();
        expect(price.innerText).toBe('$' + itemData.price);

        // Check description
        const description = infoContainer.querySelector('.item-text');
        expect(description).toBeDefined();
        expect(description.innerText).toBe(itemData.desc);
    });
});
