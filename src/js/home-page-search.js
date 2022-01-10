// 헤드
const headFeed = document.querySelector('.head-feed');
const headSearch = document.querySelector('.head-search');
// 버튼
const btnSearchUser = document.querySelector('.btn-search-user');
const btnBackFromSearch = document.querySelector('.btn-back-from-search');
// 컨테이너
const contMainPost = document.querySelector('.cont-main-post');
const contFeed = document.querySelector('.cont-feed');
// 네비게이션 리스트
const navHome = document.querySelector('.nav-home');


// show search page
function clickBtnSearch(event) {
    headFeed.classList.toggle('hidden');
    contFeed.classList.toggle('hidden');
    headSearch.classList.toggle('hidden');
}

// show the main feed page
function clickBtnBack(event) {
    headFeed.classList.remove('hidden');
    contMainPost.classList.remove('hidden');
    contFeed.classList.remove('hidden');
    headSearch.classList.add('hidden');
    headChat.classList.add('hidden');
}

btnSearchUser.addEventListener('click',clickBtnSearch);
btnBackFromSearch.addEventListener('click',clickBtnBack);
