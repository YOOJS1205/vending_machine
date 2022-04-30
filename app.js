const Machine = document.querySelector('.machine');
const List = document.querySelectorAll('.list');
const CartList = document.querySelector('.cart-list');
const GetItems = document.querySelector('.get-items');
const BeverageList = document.querySelector('.beverage-list');

var clickNumArray = [0, 0, 0, 0, 0, 0];

// 장바구니 리스트 초기화 함수....?
const removeAllChild = () => {
    while (CartList.hasChildNodes()) {
        CartList.removeChild(CartList.firstChild);
    }
}

// 상품 담기 => 이벤트 위임 사용
Machine.addEventListener('click', e => {
    for (let i = 0; i < 6; i++) {
        if (e.target === List[i]) {
            clickNumArray[i]++;
            if (clickNumArray[i] == 1 && e.target === List[i]) {
                var Detail = `<section class="detail">
                            <img class="beverage-pic" src="${e.target.childNodes[1].src}" alt="product-info">
                            <p class="beverage-name">${e.target.childNodes[3].innerHTML}</p>
                            <p class="beverage-num ${e.target.childNodes[3].innerHTML}">${clickNumArray[i]}</p>
                        <section>`;
                CartList.insertAdjacentHTML('beforeend', Detail);
            }
            else {
                document.querySelector(`.${e.target.childNodes[3].innerHTML}`).innerHTML = clickNumArray[i];
            }
        }
    }
})

GetItems.addEventListener('click', () => {
    for (let i = 0; i < CartList.childNodes.length; i++) {
        BeverageList.insertAdjacentHTML('beforeend', CartList.childNodes[i].outerHTML);
    }
})