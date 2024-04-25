import createMenuButton from '../path/to/createMenuButton.js'; // Adjust the path accordingly
import filterMenuItems from '../path/to/filterMenuItems.js'; // Adjust the path accordingly

// // Mocking filterMenuItems function
// jest.mock('../path/to/filterMenuItems');

describe('createMenuButton', () => {
    let btn;
    const btnData = {
        text: 'Test Button',
        id: 'test-btn',
    };

    beforeEach(() => {
        // Create a new button before each test
        btn = createMenuButton(btnData);
    });

    afterEach(() => {
        // Clean up after each test
        btn = null;
    });

    it('should create a button with correct text and id', () => {
        expect(btn).toBeDefined();
        expect(btn.tagName).toBe('BUTTON');
        expect(btn.type).toBe('button');
        expect(btn.innerText).toBe(btnData.text);
        expect(btn.id).toBe(btnData.id);
        expect(btn.classList.contains('filter-btn')).toBe(true);
    });

    it('should call filterMenuItems with correct id when clicked', () => {
        // Simulate a click on the button
        btn.click();
        // Check if filterMenuItems was called with correct id
        expect(filterMenuItems).toHaveBeenCalledWith(btnData.id);
    });
});
