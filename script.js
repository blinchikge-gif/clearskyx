// Получаем элементы попапа и кнопок
const joinPopup = document.getElementById('joinPopup');
const openJoin = document.getElementById('openJoin');
const closeJoin = document.getElementById('closeJoin');

// Открыть попап
openJoin.addEventListener('click', (e) => {
    e.preventDefault();
    joinPopup.classList.add('active');
});

// Закрыть попап
closeJoin.addEventListener('click', () => {
    joinPopup.classList.remove('active');
});
