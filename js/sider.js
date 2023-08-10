
triggerButton.addEventListener('click', () => {
    menu.classList.toggle('close');
    logoTitle.classList.toggle('hide');

    for (const item of menuItemArr) {
        item.classList.toggle('activetooltip');
    }

    for (const navItemText of navItemTextArr) {
        navItemText.classList.toggle('hide');
    }

    for (const arrrowDown of arrrowDownArr) {
        arrrowDown.classList.toggle('hide');
    }

    arrowLeft.classList.toggle('pstatic');
    arrowLeft.classList.toggle('hide');

    arrowRight.classList.toggle('show');
});