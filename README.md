# 음료 자판기 만들기

- ## 주소
https://yoojs1205.github.io/vending_machine/

- ## 사용한 기술 스택

  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>&nbsp;
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>&nbsp;
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>&nbsp;

  <br><br>

- ## 개발일지

  - 0409 (토)

    1. 전체적인 퍼블리싱
       - 헤더 => 로고 삽입
       - 왼쪽 음료 자판기 퍼블리싱
       - 오른쪽 구매한 음료 목록 퍼블리싱 (진행중)
       <br><br>
       <div align="center">
         <img src="images/진행상황/0409.png" width="600">
       </div><br>

  - 0410 (일)

    1. 퍼블리싱
       - 왼쪽 음료 자판기 선택한 음료 리스트창 추가
       - 왼쪽 음료 자판기 획득 버튼 추가
    2. 상품 담기 기능 구현
       - 부모 요소에 이벤트리스너를 걸어 이벤트위임 사용
       - 이벤트 타깃의 속성으로 클릭한 요소의 이미지, 텍스트에 접근

    <br>
    <div align="center">
      <img src="images/진행상황/0410코드.png" width="600">
    </div>

    <br><br>
    <div align="center">
      <img src="images/진행상황/0410.png" width="600">
    </div><br>

  - 0412 (월)

    1. 상품 담기 기능 수정
       - 6개 음료수를 담는 부모 요소에 이벤트리스너를 걸어서 이벤트 위임하는 방식으로 변경
    2. 장바구니에 담은 상품 획득한 음료로 담는 기능 구현
       - 획득 버튼을 누르면 획득한 음료 창으로 넘는 기능 구현
       - 음료 품목에 걸은 이벤트리스너 내부에 획득 버튼에 대한 이벤트리스너 부여
       <div align="center">
       <img src="images/진행상황/0412.png" width="600">
       </div><br>
    3. 자판기 중앙정렬 해결
       - position, transform 사용
       ```css
       .wrapper {
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%, -50%);
         height: 100%;
       }
       ```
