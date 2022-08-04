# 내일의 집 (React Refactoring)

## 🌟 서비스 소개



##  사용 기술

<p align='center'>
    <img src="https://img.shields.io/badge/Typescript-v4.7.3-#3178C6?logo=typescript"/>
    <img src="https://img.shields.io/badge/React-v18.1.0-#61DAFB?logo=React"/>
    <img src="https://img.shields.io/badge/SCSS-v1.52.3-#CC6699?logo=Sass">
</p>
    
## 🌟 주요 기능

### 🎇 로그인




### 1. GlobalHeader

- Sidebar(모바일)와 GNB의 active 상태를 같은 state로 적용(추가)
- GNB가 active됨에 따라 LNB item을 랜더링(추가)
- SearchHIstory(모바일/태블릿) 내용 같은 state로 적용(추가)
- input value를 SearchHistory에 추가 기능(추가)
- 데스크탑에서 SearchHIstory를 useRef/useEffect로 DOM에 접근하여 닫음

### 2. ProductShow

- ProductCarousel을 react-slick 모듈을 사용하여 구현
