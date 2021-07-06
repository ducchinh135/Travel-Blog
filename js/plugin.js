let feild = document.querySelector('textarea');
let backUp = feild.getAttribute('placeholder');
let btn = document.querySelector('.btn--commnent');
let clear = document.getElementById('clear');

feild.onfocus = function () {
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    btn.style.display = 'flex';
}

feild.onblur = function () {
    this.setAttribute('placeholder', backUp)
    this.style.borderColor = '#aaa';
}

clear.onclick = function () {
    event.preventDefault();
    btn.style.display = 'none';
    feild.value = '';
}
