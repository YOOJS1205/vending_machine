# 음료 자판기 만들기

- ## 주소

  https://yoojs1205.github.io/vending_machine/

- ## 사용한 기술 스택

  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>&nbsp;
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>&nbsp;
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>&nbsp;

- ## 주요 기능

  <div align='center'>
  <img src='https://user-images.githubusercontent.com/89122773/170978160-e01f5e05-8416-41d4-9021-e9452cb235d0.gif'>
  </div><br>

  1. 기본 소지금 30000원 보유
  2. 입금액을 입력하고, 입금 버튼을 누르면 자판기에 입금액 만큼 돈이 들어간다.
  3. 입금액이 없는 상태에서 음료를 구매하면 경고 발생
  4. 획득 버튼 클릭 시 장바구니의 음료가 획득한 음료로 넘어가고, 잔액과 총 금액이 반영된다.
  5. 잔액보다 더 많은 음료를 선택해서 구매하면 한도 초과 경고 발생
  6. 소지금보다 더 많은 돈을 입금하려고 하면 <br><br>

- ## 특징

  1. 360px 기준으로 반응형 웹을 구현하였다.
  2. HTML을 이용하여 시멘틱한 코드를 작성하였다.
  3. 상품 정보를 JSON 형식으로 담아서 순회하도록 구현하여 좀 더 동적인 자판기를 만들었다.<br><br>

- ## 후기
  1. 입금액에 숫자만 입력되고, 잔액이 부족하면 음료 구매를 막는 등의 예외 처리가 부족한 것 같다. 생각해서 반영할 예정이다.<br><br>
  2. 획득한 음료에 존재하는 음료를 장바구니에 담고 획득하면 상품 갯수만 증가시키는 기능을 구현하지 못 했다. JavaScript를 더 공부해서 반영할 예정이다.<br><br>
  3. 획득한 음료를 삭제하는 기능을 생각하지 못했다.
