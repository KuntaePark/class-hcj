# 회원가입 양식 만들기

1. form, div, label, input, button 태그 사용해서 회원가입 양식 뼈대 만들기

   - 영어로 된 아이디가 있어야 함
   - 비밀번호 있어야 함
   - 새로운 비밀번호가 있어야 함
   - 비밀번호가 같은지 유효검사 하여야 함
   - 생년월일 //YYYYMMDD
   - 회원가입 / 취소 버튼 만들기

2. Styling 하기

3. 자바스크립트로 양식 다루기

   - 변수로 잡아올 컴포넌트

     1. form
     2. userid
     3. password
     4. confirmPassword
     5. 생년월일

   - form + addEventListener submit
     1. 새로고침 방지 필수
     2. userid
        - userid 입력했는지 검사
        - userid input창 focus
          비밀번호도 마찬가지로
     3. password 유효한지 확인, input 창 focuse
     4. 생년월일 6자리인지 대충 검사
     5. 다 입력되면 회원가입 축하
     6. 취소 시 응원?
