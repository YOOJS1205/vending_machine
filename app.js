// 상품 정보 데이터 불러오기
import beverageList from './beverage.js';

const lists = document.querySelector('.lists');
const cartList = document.querySelector('.cart-list');
const getButton = document.querySelector('.get-items');
const getList = document.querySelector('.beverage-list');

// 음료수 별 클릭 횟수 배열로 담기
let clickNum = Array(beverageList.length).fill(0);

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
    if (e.target.closest('.list').nodeName === 'BUTTON') {
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

        clickNum[buttons.indexOf(e.target.closest('.list'))]++;
        itemPic.src = e.target.closest('.list').childNodes[0].src;
        itemName.innerText = e.target.closest('.list').childNodes[1].innerText;
        itemNum.innerText = clickNum[buttons.indexOf(e.target.closest('.list'))];
    }
});

// 획득 버튼
// 기능 1. 획득한 음료 칸으로 음료들 이동
// 기능 2. 음료 클릭된 수 배열 초기화
// 기능 3. 획득한 음료 총 금액 반영

const cost = document.querySelector('.cost');

let overall = 0;
getButton.addEventListener('click', () => {
    [...cartList.childNodes].forEach(item => {
        getList.appendChild(item);
    });

    for (let i = 0; i < clickNum.length; i++) {
        overall += clickNum[i];
    }

    cost.innerText = `총금액: ${overall * 1000}원`;

    clickNum = Array(beverageList.length).fill(0);
})

// 입금 버튼 클릭 시 입금액 만큼 소지금이 증가하는 기능 구현
const deposit = document.querySelector('.deposit');
const depositButton = document.querySelector('.get-deposit');
const myMoney = document.querySelector('.my-money');

let ownMoney = 0;

depositButton.addEventListener('click', () => {
    ownMoney += parseInt(deposit.value);
    myMoney.innerText = `${ownMoney}원`;
    deposit.value = '';
})