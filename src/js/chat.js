// 헤드
const headChat = document.querySelector('.head-chat');
// 컨테이너
const contChat = document.querySelector('.cont-chat');
// 버튼
const btnBackFromChat = document.querySelector('.btn-back-from-chat'); 
// 네비게이션 리스트
const navChat = document.querySelector('.nav-chat');
const imgNavChat = document.querySelector('.nav-chat::before');


// 채팅 리스트 클릭
function clickListChat(event) {
    console.log(event);
}

// show chat page
function clickNavChat(event) {
    headFeed.classList.add('hidden');
    headChat.classList.remove('hidden');
    contMainPost.classList.add('hidden');
    contChat.classList.remove('hidden');
}

// show main feed page
function clickBtnBack(event) {
    headFeed.classList.remove('hidden');
    contMainPost.classList.remove('hidden');
    contFeed.classList.remove('hidden');
    headSearch.classList.add('hidden');
    headChat.classList.add('hidden');
    contChat.classList.add('hidden');
}

navChat.addEventListener('click', clickNavChat);
btnBackFromChat.addEventListener('click',clickBtnBack);