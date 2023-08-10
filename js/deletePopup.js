
deleteButton.addEventListener('click', () => {
    const selected = [];
    
    if (tableCbHead.checked == true) {
        deleteModal.style.display = 'flex';
        dangerousText.innerText = 'Bạn có muốn xóa tất cả tài sản?';

        applyDeleteButton.addEventListener('click', () => {
            successModalContainer.style.display = 'flex';
            deleteModal.style.display = 'none';

            successModalText.innerText = 'Xóa dữ liệu thành công';

            const autoRemoveId = setTimeout(function () {
                successModalContainer.style.display = 'none';
            }, 3000);

            successCloseButton.addEventListener('click', () => {
                successModalContainer.style.display = 'none';
                clearTimeout(autoRemoveId);
            });
        });

    
    } else {
        for (let i = 0; i < tableCbBodyArr.length; i++) {
            if (tableCbBodyArr[i].checked == true) {
                selected.push(tableCbBodyArr[i]);
            }
        }

        if (selected.length > 1) {
            dangerousText.innerText = `${selected.length} tài sản đã được chọn, bạn có muốn xóa các tài sản này khỏi danh sách?`;
            deleteModal.style.display = 'flex';

            applyDeleteButton.addEventListener('click', () => {
                successModalContainer.style.display = 'flex';
                deleteModal.style.display = 'none';
    
                successModalText.innerText = 'Xóa dữ liệu thành công';
    
                const autoRemoveId = setTimeout(function () {
                    successModalContainer.style.display = 'none';
                }, 3000);
    
                successCloseButton.addEventListener('click', () => {
                    successModalContainer.style.display = 'none';
                    clearTimeout(autoRemoveId);
                });
            });
        } else if (selected.length == 1) {
            dangerousText.innerText = `Bạn có muốn xóa tài sản <<55H7WN72/2022 - Dell Inspiron 3467>>`;
            deleteModal.style.display = 'flex';

            applyDeleteButton.addEventListener('click', () => {
                successModalContainer.style.display = 'flex';
                deleteModal.style.display = 'none';
    
                successModalText.innerText = 'Xóa dữ liệu thành công';
    
                const autoRemoveId = setTimeout(function () {
                    successModalContainer.style.display = 'none';
                }, 3000);
    
                successCloseButton.addEventListener('click', () => {
                    successModalContainer.style.display = 'none';
                    clearTimeout(autoRemoveId);
                });
            });
        } else {
            deleteModal.style.display = 'none';
        }
    }
});

cancelDeleteButton.addEventListener('click', () => {
    deleteModal.style.display = 'none';
});