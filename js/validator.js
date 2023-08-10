const form = document.querySelector('.form-1');
let isValid = false;

const formControl = document.querySelectorAll('.form-control');
const formControlArr = Array.prototype.slice.call(formControl);

const getParent = (element, selector) => {
    while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
};

const validateData = () => {
    let errMsg = '';
    
    for (let i = 0; i < formControlArr.length; i++) {
        const formGroup = getParent(formControlArr[i], '.form-group');
        const formMessage = formGroup.querySelector('.form-message');
        const formLabel = formGroup.querySelector('.form-label');
        
        if (formControlArr[i].disabled == false) {
            switch(formControlArr[i].type) {
                case 'text':
                    if (formControlArr[i].value === '' || formControlArr[i].value === '0') {
                        errMsg = `Vui lòng nhập trường ${formLabel.innerText}`;
                    }
                    break;
                case 'number':
                    if (isNaN(formControlArr[i].value)) {
                        errMsg = `Trường ${formLabel.innerText} phải là số`;
                    } else if (formControlArr[i].value <= 0) {
                        errMsg = 'Vui lòng nhập số lớn hơn 0';
                    }
                    break;
                case 'date':
                    if (formControlArr[i].value === '') {
                        errMsg = `Vui lòng nhập trường ${formLabel.innerText}`;
                    }
                    break;
                case 'select-one':
                    if (formControlArr[i].value === '') {
                        errMsg = `Vui lòng chọn trường ${formLabel.innerText}`;
                    }
                    break;
                default:
            } 
        } else {
            errMsg = '';
        }

        if (errMsg !== '') {
            formMessage.innerText = errMsg;
            formGroup.classList.add('invalid');
            isValid = false;
        } else {
            formMessage.innerText = '';
            formGroup.classList.remove('invalid');
            isValid = true;
        }
    }

    return isValid;
};


form.addEventListener('submit', e => {
    e.preventDefault();

    const validForm = validateData();

    for (let i = 0; i < formControlArr.length; i++) {
        formControlArr[i].addEventListener('input', () => {
            const formGroup = getParent(formControlArr[i], '.form-group');
            const formMessage = formGroup.querySelector('.form-message');

            formMessage.style.display = 'none';
            formMessage.innerText = '';
            formGroup.classList.remove('invalid');
        });
    }

    if (validForm) {
        modal.style.display = 'none';
        successModalContainer.style.display = 'flex';

        const autoRemoveId = setTimeout(function () {
            successModalContainer.style.display = 'none';
        }, 3000);

        successCloseButton.addEventListener('click', () => {
            successModalContainer.style.display = 'none';
            clearTimeout(autoRemoveId);
        });
    }
});
