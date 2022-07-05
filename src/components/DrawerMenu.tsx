import LocalNav from './LocalNav'
import './DrawerMenu.scss'

interface DrawerMenuProps {
  children: JSX.Element
  className: string
  localNavItems: string[]
  isOpenDrawerMenu: boolean[]
  isActiveGnbNav: boolean[]
  id: number
}

function DrawerMenu({
  children,
  className,
  localNavItems,
  isOpenDrawerMenu,
  isActiveGnbNav,
  id,
}: DrawerMenuProps) {
  const isOpen = isOpenDrawerMenu[id] ? 'is-open' : ''

  /* NOTE: 'is-store' is-active 설정 */
  const isActiveGlobalNav = isActiveGnbNav[id] ? 'is-active' : ''
  return (
    <div className={`DrawerMenu ${className} ${isOpen} ${isActiveGlobalNav}`}>
      {children}
      <div className="DrawerMenu-content">
        <LocalNav classNameTitle={'DrawerMenu'} localNavItems={localNavItems} />
      </div>
    </div>
  )
}

export default DrawerMenu
