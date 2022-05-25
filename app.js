// const Machine = document.querySelector('.machine');
// const List = document.querySelectorAll('.list');
// const CartList = document.querySelector('.cart-list');
// const GetItems = document.querySelector('.get-items');
// const BeverageList = document.querySelector('.beverage-list');

// var clickNumArray = [0, 0, 0, 0, 0, 0];

// // 장바구니 리스트 초기화 함수....?
// const removeAllChild = () => {
//     while (CartList.hasChildNodes()) {
//         CartList.removeChild(CartList.firstChild);
//     }
// }

// // 상품 담기 => 이벤트 위임 사용
// Machine.addEventListener('click', e => {
//     for (let i = 0; i < 6; i++) {
//         if (e.target === List[i]) {
//             clickNumArray[i]++;
//             if (clickNumArray[i] == 1 && e.target === List[i]) {
//                 var Detail = `<section class="detail">
//                             <img class="beverage-pic" src="${e.target.childNodes[1].src}" alt="product-info">
//                             <p class="beverage-name">${e.target.childNodes[3].innerHTML}</p>
//                             <p class="beverage-num ${e.target.childNodes[3].innerHTML}">${clickNumArray[i]}</p>
//                         <section>`;
//                 CartList.insertAdjacentHTML('beforeend', Detail);
//             }
//             else {
//                 document.querySelector(`.${e.target.childNodes[3].innerHTML}`).innerHTML = clickNumArray[i];
//             }
//         }
//     }
// })

// GetItems.addEventListener('click', () => {
//     for (let i = 0; i < CartList.childNodes.length; i++) {
//         BeverageList.insertAdjacentHTML('beforeend', CartList.childNodes[i].outerHTML);
//     }
// })

// 상품 정보 데이터 불러오기
import beverageList from './beverage.js';
console.log(beverageList);

const lists = document.querySelector('.lists');
const cartList = document.querySelector('.cart-list');
const getButton = document.querySelector('.get-items');
const getList = document.querySelector('.beverage-list');

// 음료수 별 클릭 횟수 배열로 담기
const clickNum = Array(beverageList.length).fill(0);

// 상품 갯수만큼 상품 버튼 생성
beverageList.forEach(item => {
    const button = document.createElement('button');
    button.className = 'list';

    const image = document.createElement('img');
    image.className = 'product-img';
    image.src = item.image;

    const productName = document.createElement('span');
    productName.className = 'product-name';
    productName.innerText = item.name;

    const productPrice = document.createElement('span');
    productPrice.className = 'product-price';
    productPrice.innerText = item.price;

    lists.appendChild(button);
    button.append(image, productName, productPrice);
});

const buttons = [...document.querySelectorAll('.list')];

// 음료 클릭 시 장바구니에 담기는 기능 구현
lists.addEventListener('click', e => {
    if ((buttons.includes(e.target) || buttons.includes(e.target.parentNode)) &&
    (clickNum[buttons.indexOf(e.target)] == 0 || clickNum[buttons.indexOf(e.target.parentNode)] == 0)) {
        const cartItem = document.createElement('section');
        cartItem.className = 'detail';

        const itemPic = document.createElement('img');
        itemPic.className = 'beverage-pic';

        const itemName = document.createElement('p');
        itemName.className = 'beverage-name';

        const itemNum = document.createElement('p');
        itemNum.className = 'beverage-num';

        cartList.appendChild(cartItem);
        cartItem.append(itemPic, itemName, itemNum);

        if (buttons.includes(e.target)) {
            clickNum[buttons.indexOf(e.target)]++;
            itemPic.src = e.target.childNodes[0].src;
            itemName.innerText = e.target.childNodes[1].innerText;
            itemNum.innerText = clickNum[buttons.indexOf(e.target)];
        } else if (buttons.includes(e.target.parentNode)) {
            clickNum[buttons.indexOf(e.target.parentNode)]++;
            itemPic.src = e.target.parentNode.childNodes[0].src;
            itemName.innerText = e.target.parentNode.childNodes[1].innerText;
            itemNum.innerText = clickNum[buttons.indexOf(e.target.parentNode)];
        }
    }
});

// 획득 버튼 클릭 시 획득한 음료 칸에 담기는 기능 구현
getButton.addEventListener('click', () => {
    // forEach 문은 왜 작동하지 않는가..?
    // cartList.childNodes.forEach(item => {
    //     getList.appendChild(item);
    //     console.log(cartList.childNodes);
    // })
    while (cartList.childNodes.length !== 0) {
        console.log(cartList.childNodes);
        getList.appendChild([...cartList.childNodes].pop());
    }
})