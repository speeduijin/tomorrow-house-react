import { useState } from 'react'
import imgUser01 from '../assets/images/img-user-01.jpg'
import Logo from '../components/Logo'
import DrawerMenu from '../components/DrawerMenu'
import DrawerMenuButton from '../components/DrawerMenuButton'
import './Sidebar.scss'

interface SidebarProps {
  navInfo: {
    globalNavItem: string
    globalNavIClassName: string
    drawerMenuClassName: string
    localNavItems: string[]
  }[]
  isActiveSidebar: boolean
  isActiveGnbNav: boolean[]
}

interface HandleToggleDrawerMenu {
  (id: number): void
}

function Sidebar({ isActiveSidebar, navInfo, isActiveGnbNav }: SidebarProps) {
  const userMenuInfo = ['마이페이지', '나의 쇼핑', '스크랩북', '알림', '이벤트']

  const isActive = isActiveSidebar ? 'is-active' : ''

  const isOpenDrawerMenuInit: boolean[] = Array(navInfo.length).fill(false)
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
    <aside className={`Sidebar sm-only ${isActive}`}>
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
        {navInfo.map((item, idx) => {
          return (
            <DrawerMenu
              className={item.drawerMenuClassName}
              localNavItems={item.localNavItems}
              isOpenDrawerMenu={isOpenDrawerMenu}
              isActiveGnbNav={isActiveGnbNav}
              id={idx}
              key={idx}
            >
              <DrawerMenuButton
                buttonIClassName={item.globalNavIClassName}
                buttonContent={item.globalNavItem}
                id={idx}
                handleToggleDrawerMenu={handleToggleDrawerMenu}
              />
            </DrawerMenu>
          )
        })}

        {/* NOTE: 로그인을 한 경우 */}
        <div className="Sidebar-user-menu">
          <ul className="user-menu-list">
            {userMenuInfo.map((item, idx) => {
              return (
                <li className="user-menu-item" key={idx}>
                  <a href="/">{item}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
