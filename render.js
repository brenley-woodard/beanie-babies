export function renderBeanies(beanie) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    li.classList.add('card');

    img.src = beanie.image;
    img.alt = beanie.name;

    h2.textContent = beanie.name;

    p.textContent = beanie.astroSign;

    li.append(h2, img, p);

    return li;
}
