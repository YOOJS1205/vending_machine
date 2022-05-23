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
import beverageList from './beverage.js';
console.log(beverageList);

const lists = document.querySelector('.lists');

                
beverageList.forEach(item => {
    const button = document.createElement('button');
    const image = document.createElement('img');
    const productName = document.createElement('span');
    const productPrice = document.createElement('span');
    button.className = 'list';
    image.className = 'product-img';
    productName.className = 'product-name';
    productPrice.className = 'product-price';
    lists.appendChild(button);
    button.append(image, productName, productPrice);
    image.src = item.image;
    productName.innerText = item.name;
    productPrice.innerText = item.price;
});

const buttons = [...document.querySelectorAll('.list')];
const cartList = document.querySelector('.cart-list');
console.log(buttons);

lists.addEventListener('click', e => {
    if (buttons.includes(e.target) || buttons.includes(e.target.parentNode)) {
        const cartItem = document.createElement('section');
        const itemPic = document.createElement('img');
        const itemName = document.createElement('p');
        const itemNum = document.createElement('p');
        cartItem.className = 'detail';
        itemPic.className = 'beverage-pic';
        itemName.className = 'beverage-name';
        itemNum.className = 'beverage-num';
        cartList.appendChild(cartItem);
        cartItem.append(itemPic, itemName, itemNum);
        if (buttons.includes(e.target)) {
            itemPic.src = e.target.childNodes[0].src;
            itemName.innerText = e.target.childNodes[1].innerText;
        } else if (buttons.includes(e.target.parentNode)) {
            itemPic.src = e.target.parentNode.childNodes[0].src;
            itemName.innerText = e.target.parentNode.childNodes[1].innerText;
        }
    }
})

