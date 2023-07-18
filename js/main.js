const display = document.querySelector('#display-screen');

const btnsCalculate = document.querySelectorAll('.btn-calculate');
const btns = document.querySelectorAll('.btn');

btns.forEach((item) => {
  item.addEventListener('click', (e) => {
    let itemText = e.target.textContent;
    if (itemText === 'x') {
      itemText = '*';
    }
    if (itemText === '÷') {
      itemText = '/';
    }
    if (itemText === 'AC') {
      display.value = '';
    }

    if (itemText === 'C') {
      display.value = display.value.slice(0, -1);
    }
    if (itemText === '=') {
      display.value = eval(display.value)
    }

    if (itemText !=='C' && itemText !== 'AC' && itemText !=='=') {
      display.value += itemText;
    }
    console.log(itemText);
  })
})


const sin = () => {
  display.value = Math.sin(display.value)
}

const cos = () => {
  display.value = Math.cos(display.value)
}

const tan = () => {
  display.value = Math.tan(display.value)
}

const pow = () => {
  display.value = Math.pow(display.value, 2)
}

const sqrt = () => {
  display.value = Math.sqrt(display.value, 2)
}

btnsCalculate.forEach((item) => {
  item.addEventListener('click', (e) => {
    let itemText = e.target.textContent;
    if (itemText === 'sin') {
      sin()
    }
    if (itemText === 'cos') {
      cos()
    }
    if (itemText === 'tan') {
      tan()
    }
    if (itemText === 'x²') {
      pow()
    }
    if (itemText === '√') {
      sqrt()
    }
  })
})

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

/*
let switchMode = document.getElementById('switchMode');

switchMode.onclick = function () {
  let theme = document.getElementById('theme')

  if (theme.getAttribute('href') == 'light-theme.css') {
    theme.href = 'dark-theme.css';
  } else {
    theme.href = 'light-theme.css'
  }
}
*/