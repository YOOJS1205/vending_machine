const Machine = document.querySelector('.machine');
const List = document.querySelectorAll('.list');
const GetList = document.querySelector('.get-list');
const Get = document.querySelector('.get');
const BeverageList = document.querySelector('.beverage-list');

var clickNumArray = [0, 0, 0, 0, 0, 0];

// 상품 담기 => 이벤트 위임 사용
Machine.addEventListener('click', (e) => {
    for (let i = 0; i < 6; i++) {
        if (e.target === List[i]) {
            clickNumArray[i]++;
            if (clickNumArray[i] == 1) {
                var Detail = `<section class="detail">
                            <img class="beverage-pic" src="${e.target.childNodes[1].src}" alt="product-info">
                            <p class="beverage-name">${e.target.childNodes[3].innerHTML}</p>
                            <p class="beverage-num ${e.target.childNodes[3].innerHTML}">${clickNumArray[i]}</p>
                        <section>`;
                GetList.insertAdjacentHTML('beforeend', Detail);
            }
            else {
                document.querySelector(`.${e.target.childNodes[3].innerHTML}`).innerHTML = clickNumArray[i];
            }
        }

    }
})

Get.addEventListener('click', () => {
    for (let i = 1; i < GetList.childNodes.length; i++) {
        BeverageList.insertAdjacentHTML('beforeend', GetList.childNodes[i].outerHTML);
    }
})