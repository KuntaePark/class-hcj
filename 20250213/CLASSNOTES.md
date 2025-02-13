# HTML

    1. 컴포넌트가 시작되는 부모요소는 늘 하나다.
    2. 클래스를 부모요소에게 준 다음에 시작한다.
    3. 클래스를 마구잡이로 부여하지 않는다. 시맨틱 태그 사용

# CSS

    1. .class.class : 여러 클래스를 동시에 가지고 있는 태그를 선택
    2. 선행 선택자 + 마지막 선택자: 마지막 선택자가 내가 스타일링을 줄 태그임
    3. position:
        - relative: 부모요소로 지정, 기준이 됨
        - absolute: 자식요소로 지정, 기준을 따라감
        **주의사항**: top,left 등의 두개만 잡을 수 있음.
        - content : 가상요소 만드는 친구
    4. object-fit:
        - cover : 찌그러진 사진을 예쁘게 펴줌, 단 위치조정은 안됨
    5. tag + tag : 태그 옆에 다른 태그를 선택 가능
    6. input에서 :checked와 같이 상태 선택 가능
    7. transition : 애니메이션 효과를 적용할 수 있음
        - 예시 : transition : all 2s;
    8. label, span : display 속성을 block으로 두어야 보임

# JS

    1. document : DOM(Document Object Model) : 웹 그 자체
    2. document.querySelector : CSS selector 규칙에 따라 오브젝트를 가져옴
    3. document.createElement : 태그를 만들어줌
    4. [objectReference].onclick = 클릭 이벤트를 함수를 통해 설정 가능
    5. setInterval : 일정 주기마다 함수를 실행하도록 설정할 수 있음. Interval Handle을 리턴한다.
        - clearInterval(Interval Handle)을 통해 삭제 가능.
