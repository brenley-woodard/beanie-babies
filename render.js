export function renderBeanies(beanie) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    li.classList.add('card');

    img.src = beanie.image;
    img.alt = beanie.title;

    h2.textContent = beanie.title;

    p.textContent = beanie.astroSign;

    li.append(h2, img, p);

    return li;
}

// is it astrosign.name or astroSign.name?
export function renderAstroSign(astrosign) {
    const option = document.createElement('option');
    option.value = astrosign.name;
    option.textContent = astrosign.name;
    return option;
}
