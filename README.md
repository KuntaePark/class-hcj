# HTML

1. HTML이란

   - 웹페이지 만드는 언어
   - 웹페이지 뼈대

2. HTML의 구성요소

   - head : meta, link, style 등이 들어감
   - body : 나머지 모든 태그 들어갈 수 있음, script 태그도 body의 끝자락에 들어감

3. body에 들어가는 태그들

   - header : 웹페이지에 딱 한 번 들어가면 됨, 제목, 메뉴버튼, nav바, 메뉴 이동 버튼 등이 들어감
   - main : 어떤 태그든 들어갈 수 있음. 중요한 내용들이 들어간다.
   - footer : 바닥글로 딱 한 번 들어감. 기타 잡다한 내용들. 주로 주소, 번호, 사업자 등록번호 같은게 들어감

4. article : 기사

   - main을 나눠주는 컴포넌트를 감싸주는 태그

5. section : 구간

   - article 태그 안에서 영역을 구분

6. div : division

   - 어디에서든지 구간을 나누려 할 때 사용
     **주의사항**: p 태그 내부에는 쓰면 안된다.
     - 웹페이지의 99%는 div이다.

7. text를 표시하는 태그들

   - h1 ~ h6
   - p
     - 만약 p 태그의 특정 부분을 선택해서 다른 스타일을 주고 싶다면 span을 이용

8. button

# CSS

CSS: Cascading StyleSheet

    - 웹 꾸미기

## inline style

    <div style="display:flex;">

## style tag

    <head>
    <style>
      div {
        display: flex;
      }
    </style>
    </head>

## 외부 스타일시트 연결

    1. CSS 우선순위 : inline style -> style tag -> 외부 스타일시트 순
    **주의사항** 보통 스타일링 항목은 매우 많기 때문에 외부 스타일시트를 연결하는 것이 좋다.

    2. 선택자
        - 태그이름 : 태그를 이용한 선택
        - > : 해당 태그의 자식 요소 선택
            * :nth-child(n), :first-child(), :last-child()를 통해 특정 순서의 자식을 선택해올 수도 있다.
        - .class : 클래스를 이용한 선택
            * 하나의 태그에 여러 클래스를 부여할 수 있다.
            * 여러 태그에 동일한 클래스를 적용할 수 있다.
        - #id : id를 이용한 선택
            * 하나의 태그에 여러 아이디를 부여 가능하나, 다른 태그에 같은 아이디를 부여할 순 없다.

<link rel="stylesheet" href = "style.css">

# JS

1. 기능 구현 (웹개발의 90% 이상)
