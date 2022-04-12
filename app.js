const Machine = document.querySelector('.machine');
const List = document.querySelectorAll('.list');
const GetList = document.querySelector('.get-list');
const Get = document.querySelector('.get');
const BeverageList = document.querySelector('.beverage-list');

// 상품 담기 => 이벤트 위임 사용
Machine.addEventListener('click', (e) => {
    for (let i = 0; i < 6; i++) {
        if (e.target === List[i]) {
            const Detail = `<section class="detail">
                            <img src="${e.target.childNodes[1].src}" alt="product-info">
                            <p>${e.target.childNodes[3].innerHTML}</p>
                        <section>`;
            GetList.insertAdjacentHTML('beforeend', Detail);
            Get.addEventListener('click', () => {
                BeverageList.insertAdjacentHTML('beforeend', Detail);
            })
        }
    }
})