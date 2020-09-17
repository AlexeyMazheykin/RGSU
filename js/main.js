(function () {
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form');
    let tabNav;

    const formSelect = function (tabNav) {
        forms.forEach(item => {
            if (item.classList.contains(tabNav)) {
                item.classList.add('form__active');
            } else {
                item.classList.remove('form__active');
            }
        });
    };

    const tabsSelect = function () {
        tabs.forEach(item => {
            item.classList.remove('tab__active');
        });
        tabNav = this.getAttribute('data__form');
        this.classList.add('tab__active');
        formSelect(tabNav);
    };

    tabs.forEach(item => {
        item.addEventListener('click', tabsSelect)
    });
/*     let btn = document.querySelectorAll('.confirm__btn');
    console.log(btn) */

}());
