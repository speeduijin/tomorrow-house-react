import './Sidebar.scss'

function Sidebar() {
  return (
    <aside className="sidebar sm-only">
      <header className="sidebar-header">
        <h1 className="logo">
          <a href="/">
            <img src="./assets/images/Logo.svg" alt="내일의 집" />
          </a>
        </h1>

        {/* NOTE: 로그인을 한 경우 */}
        <div className="sidebar-user">
          <a href="/">
            <div className="avatar-24">
              <img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨" />
            </div>
            <strong className="username">사달라</strong>
          </a>
        </div>

        {/* NOTE: 로그인을 하지 않은 경우 */}
        {/* <div className="sidebar-auth">
          <a className="btn-outlined btn-40" href="/">
            로그인
          </a>
          <a className="btn-primary btn-40" href="/">
            회원가입
          </a>
        </div> */}
      </header>

      <nav className="sidebar-nav">
        <h2 className="visually-hidden">메뉴</h2>
        <div className="drawer-menu is-community">
          <button className="drawer-menu-button" type="button">
            <i className="ic-community" aria-hidden></i>
            커뮤니티
            <i className="ic-chevron" aria-hidden></i>
          </button>

          <div className="drawer-menu-content">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item">
                <a href="/">홈</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">팔로잉</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">사진</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">집들이</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">노하우</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">전문가집들이</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">셀프가이드</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">질문과 답변</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/"> 이벤트 </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="drawer-menu is-store is-active is-open">
          <button className="drawer-menu-button" type="button">
            <i className="ic-store" aria-hidden></i>
            스토어
            <i className="ic-chevron" aria-hidden></i>
          </button>

          <div className="drawer-menu-content">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item">
                <a href="/">스토어홈</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">카테고리</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">신혼가구</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">베스트</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">오늘의딜</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">연휴특가</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">월동준비</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">리퍼마켓</a>
              </li>
              <li className="drawer-menu-item is-active">
                <a href="/">
                  기획전
                  <i className="ic-new" lang="en" aria-label="New"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="drawer-menu is-expert">
          <button className="drawer-menu-button" type="button">
            <i className="ic-expert" aria-hidden></i>
            인테리어시공
            <i className="ic-chevron" aria-hidden></i>
          </button>

          <div className="drawer-menu-content">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item">
                <a href="/">업체찾기</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">간편상담신청</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">견적계산</a>
              </li>
            </ul>
          </div>
        </div>
        {/* NOTE: 로그인을 한 경우 */}
        <div className="sidebar-user-menu">
          <ul className="user-menu-list">
            <li className="user-menu-item">
              <a href="/">마이페이지</a>
            </li>
            <li className="user-menu-item">
              <a href="/">나의 쇼핑</a>
            </li>
            <li className="user-menu-item">
              <a href="/">스크랩북</a>
            </li>
            <li className="user-menu-item">
              <a href="/">알림</a>
            </li>
            <li className="user-menu-item">
              <a href="/">이벤트</a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
