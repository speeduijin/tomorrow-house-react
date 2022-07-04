import { useState } from 'react'
import imgUser01 from '../assets/images/img-user-01.jpg'
import Logo from '../components/Logo'
import DrawerMenu from '../components/DrawerMenu'
import DrawerMenuButton from '../components/DrawerMenuButton'
import './Sidebar.scss'

interface SidebarProps {
  isActiveSidebar: boolean
}

interface HandleToggleDrawerMenu {
  (id: number): void
}

function Sidebar({ isActiveSidebar }: SidebarProps) {
  const drawMenuInfo = [
    {
      className: 'is-community',
      contents: [
        '홈',
        '사진',
        '집들이',
        '노하우',
        '전문가집들이',
        '셀프가이드',
        '질문과 답변',
        '이벤트',
      ],
      buttonIClassName: 'ic-community',
      buttonContent: '커뮤니티',
    },
    {
      className: 'is-store',
      contents: [
        '스토어홈',
        '카테고리',
        '신혼가구',
        '베스트',
        '오늘의딜',
        '연휴특가',
        '월동준비',
        '리퍼마켓',
        '기획전',
      ],
      buttonIClassName: 'ic-store',
      buttonContent: '스토어',
    },
    {
      className: 'is-expert',
      contents: ['시공홈', '시공스토어'],
      buttonIClassName: 'ic-expert',
      buttonContent: '인테리어시공',
    },
  ]
  const userMenuInfo = ['마이페이지', '나의 쇼핑', '스크랩북', '알림', '이벤트']

  const isActive = isActiveSidebar && ' is-active'

  const isOpenDrawerMenuInit: boolean[] = Array(drawMenuInfo.length).fill(false)
  /* NOTE: 'is-store' is-active 설정 */
  isOpenDrawerMenuInit[1] = true
  const [isOpenDrawerMenu, setIsOpenDrawerMenu] = useState(isOpenDrawerMenuInit)

  const handleToggleDrawerMenu: HandleToggleDrawerMenu = (id) => {
    const copyIsOpenDrawerMenu = [...isOpenDrawerMenu]
    copyIsOpenDrawerMenu[id] !== true && copyIsOpenDrawerMenu.fill(false)
    copyIsOpenDrawerMenu[id] = !copyIsOpenDrawerMenu[id]
    setIsOpenDrawerMenu(copyIsOpenDrawerMenu)
  }
  return (
    <aside className={`Sidebar sm-only${isActive}`}>
      <header className="Sidebar-header">
        <Logo />

        {/* NOTE: 로그인을 한 경우 */}
        <div className="Sidebar-user">
          <a href="/">
            <div className="avatar-24">
              <img src={imgUser01} alt="사달라 아저씨" />
            </div>
            <strong className="username">사달라</strong>
          </a>
        </div>

        {/* NOTE: 로그인을 하지 않은 경우 */}
        {/* <div className="Sidebar-auth">
          <a className="btn-outlined btn-40" href="/">
            로그인
          </a>
          <a className="btn-primary btn-40" href="/">
            회원가입
          </a>
        </div> */}
      </header>

      <nav className="Sidebar-nav">
        <h2 className="visually-hidden">메뉴</h2>
        {drawMenuInfo.map((item, idx) => {
          return (
            <DrawerMenu
              className={item.className}
              contents={item.contents}
              isOpenDrawerMenu={isOpenDrawerMenu}
              id={idx}
              key={idx}
            >
              <DrawerMenuButton
                buttonIClassName={item.buttonIClassName}
                buttonContent={item.buttonContent}
                id={idx}
                handleToggleDrawerMenu={handleToggleDrawerMenu}
              />
            </DrawerMenu>
          )
        })}

        {/* NOTE: 로그인을 한 경우 */}
        <div className="Sidebar-user-menu">
          <ul className="user-menu-list">
            {userMenuInfo.map((item, idx) => (
              <li className="user-menu-item" key={idx}>
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
