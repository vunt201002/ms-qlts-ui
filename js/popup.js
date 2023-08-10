
tableCbHead.addEventListener('click', () => {
    if (tableCbHead.checked == true) {
        for (let i = 0; i < tableCbBodyArr.length; i++) {
            tableCbBodyArr[i].checked = true;
        }
    } else {
        for (let i = 0; i < tableCbBodyArr.length; i++) {
            tableCbBodyArr[i].checked = false;
        }
    }
});

addBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalHeaderText.innerText = "Thêm tài sản"
});

modalHeaderClose.addEventListener('click', () => {
    modal.style.display = 'none';

    for (let i = 0; i < formGroupArr.length; i++) {
        formGroupArr[i].classList.remove('invalid');
    }
});

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();

    deleteModal.style.display = 'flex';
    dangerousText.innerText = 'Bạn có muốn hủy bỏ khai báo tài sản này?';
    cancelDeleteButton.innerText = 'Không';
    applyDeleteButton.innerText = 'Hủy bỏ';

    cancelDeleteButton.addEventListener('click', () => {
        deleteModal.style.display = 'none';
    });

    applyDeleteButton.addEventListener('click', () => {
        deleteModal.style.display = 'none';
        modal.style.display = 'none';

        for (let i = 0; i < formGroupArr.length; i++) {
            formGroupArr[i].classList.remove('invalid');
        }
    });
});

for (let i = 0; i < tableUpdateButtonArr.length; i++) {
    tableUpdateButtonArr[i].addEventListener('click', () => {
        modal.style.display = 'flex';
        modalHeaderText.innerText = "Sửa tài sản"
        cancelButton.addEventListener('click', (e) => {

            dangerousText.innerText = 'Thông tin này sẽ không được cập nhật nếu bạn không lưu. Bạn có muốn lưu các thay đổi này?';
            cancelDeleteButton.innerText = 'Hủy bỏ';
            applyDeleteButton.innerText = 'Lưu';

            notApplyButton.style.display = 'block';

            cancelDeleteButton.addEventListener('click', () => {
                deleteModal.style.display = 'none';
            });

            notApplyButton.addEventListener('click', () => {
                deleteModal.style.display = 'none';
                modal.style.display = 'none';
            });
        
            applyDeleteButton.addEventListener('click', () => {
                deleteModal.style.display = 'none';
                modal.style.display = 'none';

                successModalContainer.style.display = 'flex';

                const autoRemoveId = setTimeout(function () {
                    successModalContainer.style.display = 'none';
                }, 3000);

                successCloseButton.addEventListener('click', () => {
                    successModalContainer.style.display = 'none';
                    clearTimeout(autoRemoveId);
                });
            });
        });
    });
}

