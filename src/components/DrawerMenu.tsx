import './DrawerMenu.scss'

interface DrawerMenuProps {
  children: JSX.Element
  className: string
  contents: string[]
  isOpenDrawerMenu: boolean[]
  id: number
}

function DrawerMenu({
  children,
  className,
  contents,
  isOpenDrawerMenu,
  id,
}: DrawerMenuProps) {
  const isOpen = isOpenDrawerMenu[id] ? 'is-open' : ''

  /* NOTE: 'is-store' is-active 설정 */
  const isStoreActive = className === 'is-store' ? 'is-active' : ''
  return (
    <div className={`DrawerMenu ${className} ${isOpen} ${isStoreActive}`}>
      {children}
      <div className="DrawerMenu-content">
        <ul className="DrawerMenu-list">
          {contents.map((item, idx) => {
            /* NOTE: '기획전' is-active 설정 */
            const isActive = item === '기획전' ? 'is-active' : ''
            /* NOTE: '기획전' New Icon 적용 */
            const isNew = item === '기획전' && (
              <i className="ic-new" lang="en" aria-label="New"></i>
            )
            return (
              <li className={`DrawerMenu-item ${isActive}`} key={idx}>
                <a href="/">
                  {item}
                  {isNew}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default DrawerMenu
