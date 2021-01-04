const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click' , () => {
    alert('Служит для вывода информации в консоль');
})

const alertclick = document.querySelector('#alert');

alertclick.addEventListener('click' , () => {
    alert('Служит для вывода в браузере предупреждающего модального диалогового окна');
})


const promptclick = document.querySelector('#prompt');

promptclick.addEventListener('click' , () => {
    alert('Служит для выводит сообщения и ждёт, пока пользователь введёт текст');
})