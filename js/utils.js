const input  = document.querySelector('input')
        
// only allow enter number or backspace
input.addEventListener('keydown', (event) => {
    if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
});

// format the input when blur
input.addEventListener('change', (e) => {
    const num = Number(e.target.value);
    const formatted = num.toLocaleString('vi-VN'); // use this to format number
    console.log(formatted);
    e.target.value = formatted;
});