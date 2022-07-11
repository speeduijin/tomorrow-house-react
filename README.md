# 내일의 집 (React Refactoring)

### 1. GlobalHeader

- Sidebar(모바일)와 GNB의 active 상태를 같은 state로 적용(추가)
- GNB가 active됨에 따라 LNB item을 랜더링(추가)
- SearchHIstory(모바일/태블릿) 내용 같은 state로 적용(추가)
- input value를 SearchHistory에 추가 기능(추가)
- 데스크탑에서 SearchHIstory를 useRef/useEffect로 DOM에 접근하여 닫음

### 2. ProductShow

- ProductCarousel을 react-slick 모듈을 사용하여 구현
