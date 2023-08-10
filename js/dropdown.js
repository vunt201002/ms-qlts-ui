const dropdown = document.querySelector('.dropdown');
        const dropdownOption = document.querySelector('.dropdown__option');
        const dropdownInput = document.querySelector('.dropdown__input');

        const dropdownOptionItem = document.querySelectorAll('.dropdown__option--item');
        const dropdownOptionItemArr = Array.prototype.slice.call(dropdownOptionItem);

        const chooseOption = () => {
            for (let i = 0; i < dropdownOptionItemArr.length; i++) {
                const option = dropdownOptionItemArr[i].querySelector('.dropdown__option--item-name').textContent;
                dropdownOptionItemArr[i].addEventListener('click', () => {
                    dropdownInput.value = option;
                });
            }
        }

        const optionSearch = () => {
            dropdownInput.addEventListener('keyup', () => {
                const filter = dropdownInput.value.toUpperCase();
                for (let i = 0; i < dropdownOptionItemArr.length; i++) {
                    let textValue = dropdownOptionItemArr[i].textContent || dropdownOptionItemArr.innerText;
                    
                    if (textValue.toUpperCase().indexOf(filter) > -1) {
                        dropdownOptionItemArr[i].style.display = '';
                    } else {
                        dropdownOptionItemArr[i].style.display = 'none';
                    }
                };
            });
        }

        optionSearch();

        chooseOption();

        dropdownInput.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdownOption.style.display = 'block';
        });

        dropdownOption.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        dropdown.addEventListener('click', () => {
            dropdownOption.style.display = 'none';
        });