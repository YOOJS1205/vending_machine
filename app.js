const FirstLists = document.querySelector('.lists:first-child');
const SecondLists = document.querySelector('.lists:last-child');
const List = document.querySelectorAll('.list');
const GetList = document.querySelector('.get-list');

// 상품 담기 => 이벤트 위임 사용
FirstLists.addEventListener('click', (e) => {
    for (let i = 0; i < 3; i++) {
        if (e.target === List[i]) {
            const Detail = `<section class="detail">
                            <img src="${e.target.childNodes[1].src}" alt="product-info">
                            <p>${e.target.childNodes[3].innerHTML}</p>
                        <section>`;
            GetList.insertAdjacentHTML('beforeend', Detail);
        }
    }
})