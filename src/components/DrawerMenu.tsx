import LocalNav from './LocalNav'
import './DrawerMenu.scss'

interface DrawerMenuProps {
  info: {
    id: number
    globalNavItem: string
    globalNavIClassName: string
    localNavItems: string[]
    drawerMenuClassName: string
  }
  isActiveGnbNav: boolean[]
  isOpenDrawerMenu: boolean[]
  setIsOpenDrawerMenu: React.Dispatch<React.SetStateAction<boolean[]>>
}

interface HandleToggleDrawerMenu {
  (id: number): void
}

function DrawerMenu({
  info,
  isActiveGnbNav,
  isOpenDrawerMenu,
  setIsOpenDrawerMenu,
}: DrawerMenuProps) {
  const handleToggleDrawerMenu: HandleToggleDrawerMenu = (id) => {
    const copyIsOpenDrawerMenu = [...isOpenDrawerMenu]
    !isOpenDrawerMenu[id] && copyIsOpenDrawerMenu.fill(false)

    copyIsOpenDrawerMenu[id] = !copyIsOpenDrawerMenu[id]

    setIsOpenDrawerMenu(copyIsOpenDrawerMenu)
  }

  const isActiveGlobalNav = isActiveGnbNav[info.id] ? 'is-active' : ''

  const isOpen = isOpenDrawerMenu[info.id] ? 'is-open' : ''

  return (
    <div
      className={`DrawerMenu ${info.drawerMenuClassName} ${isOpen} ${isActiveGlobalNav}`}
    >
      <button
        className="DrawerMenuButton"
        type="button"
        onClick={() => {
          handleToggleDrawerMenu(info.id)
        }}
      >
        <i className={info.globalNavIClassName} aria-hidden></i>
        {info.globalNavItem}
        <i className="ic-chevron" aria-hidden></i>
      </button>

      <div className="DrawerMenu-content">
        <LocalNav
          classNameTitle={'DrawerMenu'}
          localNavItems={info.localNavItems}
        />
      </div>
    </div>
  )
}

export default DrawerMenu
