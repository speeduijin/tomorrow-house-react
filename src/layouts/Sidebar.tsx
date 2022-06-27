import Logo from '../assets/images/Logo.svg'
import imgUser01 from '../assets/images/img-user-01.jpg'
import DrawerMenu from '../components/DrawerMenu'
import './Sidebar.scss'

interface SidebarProps {
  isActiveSidebar: boolean
}

function Sidebar(props: SidebarProps) {
  return (
    <aside
      className={`sidebar sm-only ${props.isActiveSidebar ? 'is-active' : ''}`}
    >
      <header className="sidebar-header">
        <h1 className="logo">
          <a href="/">
            <img src={Logo} alt="내일의 집" />
          </a>
        </h1>

        {/* NOTE: 로그인을 한 경우 */}
        <div className="sidebar-user">
          <a href="/">
            <div className="avatar-24">
              <img src={imgUser01} alt="사달라 아저씨" />
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
        <DrawerMenu
          className="is-community"
          itemName={[
            '홈',
            '사진',
            '집들이',
            '노하우',
            '전문가집들이',
            '셀프가이드',
            '질문과 답변',
            '이벤트',
          ]}
          buttonIClassName="ic-community"
          buttonContent="커뮤니티"
        />

        <DrawerMenu
          className="is-store is-active is-open"
          itemName={[
            '스토어홈',
            '카테고리',
            '신혼가구',
            '베스트',
            '오늘의딜',
            '연휴특가',
            '월동준비',
            '리퍼마켓',
          ]}
          buttonIClassName="ic-store"
          buttonContent="스토어"
        />

        <DrawerMenu
          className="is-expert"
          itemName={['시공홈', '시공스토어']}
          buttonIClassName="ic-expert"
          buttonContent="인테리어시공"
        />

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