document.querySelectorAll('.custom-select').forEach((customSelectWrapper) => {

    const customSelectBtn = customSelectWrapper.querySelector('.custom-select__field');
    const customSelectText = customSelectWrapper.querySelector('.custom-select__text');
    const customSelectIcon = customSelectWrapper.querySelector('.custom-select__icon');
    const customSelectList = customSelectWrapper.querySelector('.custom-select__list');
    const customSelectInput = customSelectWrapper.querySelector('.custom-select__input-hidden');

    customSelectBtn.addEventListener('click', function () {
        customSelectList.classList.toggle('custom-select__list--visible');
        customSelectIcon.classList.toggle('custom-select__icon--rotate');
    });

    customSelectList.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.target.classList.contains('custom-select__item')) {
            const self = e.target;
            customSelectText.textContent = self.textContent;

            const data = self.dataset.value;
            customSelectInput.value = data;

            removeCustomSelectListLVisible();

        }
    });

    document.addEventListener('click', (e) => {
        if (e.target !== customSelectBtn) {
            removeCustomSelectListLVisible();

        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' || e.key === 'Escape') {
            removeCustomSelectListLVisible();

        }
    });

    function removeCustomSelectListLVisible() {
        customSelectList.classList.remove('custom-select__list--visible');
        customSelectIcon.classList.remove('custom-select__icon--rotate');
    }
});

