# form 이란

양식을 제출한다

- 예시: 회원가입 폼

1. input 입력하고 Enter 시 동작하면 form

2. 용도: 추가 및 수정 CREATE/UPDATE

3. 사용법:

   - label + input + select
   - button: 동작하는 버튼

4. 특징:
   제출 시 무조건 새로고침함 - event.preventDefault() 시 새로고침 방지

## input

1. 여러 type이 존재: text, password 등
2. label 태그와 연결 가능
   - label의 for 값과 input의 id를 동일하게 준다.

## select

1. label과 연결하면 좋음
2. option 태그와 사용한다.

   <select>
   <option value="val">option1</option>
   </select>

   - Option을 선택하면 value값을 가져온다.
   - 보통 value를 입력하지 않은 option을 placeholder로 사용한다.
   - selected 속성을 부여하여 미리 값을 정해줄 수 있다.
   - selected가 여러 개 있으면 마지막 option을 선택해준다.

## submit 버튼

1. button
   - form tag 안에서는 기본 타입이 submit이다.
2. input button
