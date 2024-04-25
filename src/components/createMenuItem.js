const createMenuItem = (itemData) => {
    // create article
    const article = document.createElement('article');
    article.classList.add('menu-item', itemData.category);

    // create img
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = itemData.src;
    img.alt = itemData.title;

    // create a div for item info
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('item-info');

    // create a header
    const header = document.createElement('header');

    // create title
    const title = document.createElement('h4');
    title.innerText = itemData.title;

    // create price
    const price = document.createElement('h4');
    price.classList.add('price');
    price.innerText = '$' + itemData.price;

    // append title and price
    header.append(title, price);

    // create description
    const description = document.createElement('p');
    description.classList.add('item-text');
    description.innerText = itemData.desc;

    // append header and description
    infoContainer.append(header, description);

    // append img, infoContainer
    article.append(img, infoContainer);

    return article;
};

export default createMenuItem;
