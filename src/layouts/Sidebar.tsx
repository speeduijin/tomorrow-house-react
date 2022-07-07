import { useState } from 'react'
import imgUser01 from '../assets/images/img-user-01.jpg'
import Logo from '../components/Logo'
import DrawerMenu from '../components/DrawerMenu'
import './Sidebar.scss'

interface SidebarProps {
  navInfo: {
    id: number
    globalNavItem: string
    globalNavIClassName: string
    localNavItems: string[]
    drawerMenuClassName: string
  }[]
  isActiveGnbNavItem: boolean[]
  isActiveSidebar: boolean
}

function Sidebar({
  navInfo,
  isActiveGnbNavItem,
  isActiveSidebar,
}: SidebarProps) {
  const userMenuInfo = ['마이페이지', '나의 쇼핑', '스크랩북', '알림', '이벤트']

  const isOpenDrawerMenuInit = Array(navInfo.length).fill(false)
  /* NOTE: '스토어' is-active 설정 */
  isOpenDrawerMenuInit[1] = true
  const [isOpenDrawerMenu, setIsOpenDrawerMenu] = useState([
    ...isOpenDrawerMenuInit,
  ])

  const isActive = isActiveSidebar ? 'is-active' : ''

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
        {navInfo.map((item) => {
          return (
            <DrawerMenu
              info={item}
              key={item.id}
              isActiveGnbNavItem={isActiveGnbNavItem}
              isOpenDrawerMenu={isOpenDrawerMenu}
              setIsOpenDrawerMenu={setIsOpenDrawerMenu}
            />
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
