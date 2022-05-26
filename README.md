# SSAMOVIE

## 팀원정보 및 업무 분담 내역

- **이도훈 - 프론트엔드 담당** 
  - **Vue.js**, **Bootstrap Vue**
- **최진욱 - 벡엔드 담당**
  - **Django API Server, API를 활용한 Data Seeding 구현**



## 목표 서비스 구현 및 실제 구현 정도

- **API 를 활용하여 영화 정보를 받아서 DB를 생성하기 (완료)**
- **로그인을 했을 경우에만 접속가능 (완료)**
- **영화 데이터를 인기순으로 출력 (완료)**
- **영화추천 기능 (랜덤추천 완료, 장르별 추천 미완료 )**
- **영화별 평점주기 (완료)**
- **커뮤니티 게시판 (완료)**
- **유저 프로필 페이지 (작성한 게시글 불러오기 완료, 시청한 영화출력 미완료)**

## 진행상황

Notion:
https://brainy-vulture-4fb.notion.site/3a8810d7cecd4a8caec9333b6a541988?v=c7aacc66f2894cb7b22b14d477b3c34e

<img width="800" alt="캘린더 일정표" src="https://user-images.githubusercontent.com/81965433/170444439-4625e417-7538-400c-8953-ff4c06dc6c59.png">

## ERD

<img width="800" alt="final_erd" src="https://user-images.githubusercontent.com/81965433/170444135-0059ab56-3972-4b8e-9c46-6f8b4c0f3fde.png">

## COMPONENTS

![컴포넌트 drawio](https://user-images.githubusercontent.com/81965433/170444141-166ca94c-2f12-4d7a-9097-7b9d342940d3.png)

## 핵심기능

- **로그인 했을 경우에만 접속가능**

  <img width="800" alt="로그인 페이지" src="https://user-images.githubusercontent.com/81965433/170447311-e1b03b2c-88b7-4e43-898c-cb8ee8652ed1.png">

- **영화 상세페이지 Modal로 띄우기**

  <img width="800" alt="Modal" src="https://user-images.githubusercontent.com/81965433/170447326-2be53c9d-3132-419d-9bae-7b2429dde85a.png">

## 느낌점

- 이도훈

  ERD와 컴포넌트의 설계에 가장 많은 시간을 할애하여 꼼꼼히 해야한다는 것을 느꼈습니다.

  설계 시 예상하지 못했던 부분을 만들 때 컴포넌트를 사용하여 좀 더 간결하고 직관적으로 만들 수 있었음에도 하나의 페이지로 작성하게 되었습니다.

  렌더링의 과정을 정확하게 알아야 할 것 같습니다. 마구잡이로 기능만 구현을 하니까 순서가 바뀌어서 원하는 시점에 원하는 데이터를 얻을 수 없었습니다.

  프로젝트를 시작할 때 vuetify를 이용하여 디자인을 구성하려고 했는데 사용방법을 정확하게 학습하지 못한 탓인지 오류가 많이 발생해 중간에 포기하고 bootstrap을 사용하게 되서 아쉬움이 남습니다.

  

- 최진욱

  프로젝트를 하면서 Serializaer를 만들고 데이터를 직렬화 해보면서 초반엔 많이 버벅거렸지만 나중엔 익숙해져 프로젝트를 무사히 끝낼 수 있었다.

  프로젝트를 하기 전에 Django에서 Vue로 response 하는 과정을 정확하게 이해하지 못했는데 직접해보면서 직관적으로 알 수 있게 되었다.