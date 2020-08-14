# TodoList CRUD 1주차 미션 [김경록 / Roki]
> 진행사항은 Notion으로 정리해봤습니다. 2페이지나 있는 이유는, 
> 처음 설계와 최종 설계가 달랐기 때문입니다.

[1주차 미션 개발기...1탄](https://www.notion.so/rok93/1-C-R-U-D-4690f001a4ea48e5aa6257ad35f6be5f)    
[1주차 미션 개발기...2탄](https://www.notion.so/rok93/1-2-8b624729fbce4174b8b583efb10c3200)

### 📌 필수 요구사항 (All Clear)
---
-[x] todo list에 todoItem을 키보드로 입력하여 추가하기
-[x] todo list의 체크박스를 클릭하여 complete 상태로 변경. (li tag 에 completed class 추가, input 태그에 checked 속성 추가)
-[x] todo list의 x버튼을 이용해서 해당 엘리먼트를 삭제
-[x] todo list를 더블클릭했을 때 input 모드로 변경. (li tag 에 editing class 추가) 단 이때 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
-[x] todo list의 item갯수를 count한 갯수를 리스트의 하단에 보여주기
-[x] todo list의 상태값을 확인하여, 해야할 일과, 완료한 일을 클릭하면 해당 상태의 아이템만 보여주기
### 📌📌심화 요구사항 (All Clear)
-[x] localStorage에 데이터를 저장하여, TodoItem의 CRUD를 반영하기. 따라서 새로고침하여도 저장된 데이터를 확인할 수 있어야 함
---
## Bug Reporter 🐞 
새로운 Todo를 입력할 때, 한글로 끝나는(마지막 글자) Todo Title을 입력하면, 새로운 Todo Item이 2개 중복되서 입력되는 현상이 발생 함. <br>
--> 인코딩 관련 문제가 아닐까 추측, 관련 오류 찾아보고 수정하기 

## 미션을 수행하면서....
Java로 주로 웹 백엔드의 작업만 주구장창하다가, js로 모든 처리를 해야한다는 상황이 낯설게 느껴졌습니다. <br>
처음 미션을 수행한 방식(위 링크 1탄 페이지 참고)은 백엔드 단에서 모든 작업을 처리해서 데이터를 가져다 주고, js는 <br>
단순히 view에 받아온 값을 집어넣는 수단(거의 ajax때만 사용한 것 같습니다)으로만 사용했는데, js만으로 상태를 관리하는<br>
코드를 짜는 것이 많이 힘들게 느껴졌습니다. 참고자료['상태관리']를 봐도 전체적인 그림이 그려지지 않아, 답답함만 생겼는데, <br> 
다른 스터디원들의 코드를 보며 코드 구조를 파악해보려고 했는데, 이것도 쉽지가 않았습니다. 결국 무작정 '클론코딩' 해보자는 생각으로 <br>
일단 따라 쳐봤습니다. 치면서 다른분들이 어떤식으로 **상태관리** 를 하는지 조금씩 감이 왔었고, 그 덕분에 제가 직접 코드를 짜서 지금 <br>
PR까지 진행할 수 있었던 것 같습니다. (다른분들의 코드도 많이봤지만, JSKim님과 이수연님의 코드를 많이 참조했었던 것 같습니다. 다시한번 감사하다는 말씀 드리고 싶습니다. ) <br>

코드 리뷰는 자유롭게 부탁드립니다. 어떤 사소한 것도 좋습니다. <br>
감사합니다. 
