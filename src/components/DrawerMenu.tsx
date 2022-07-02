import './DrawerMenu.scss'

interface DrawerMenuProps {
  children: JSX.Element
  className: string
  contents: string[]
  isOpen: boolean[]
  id: number
}

function DrawerMenu({
  children,
  className,
  contents,
  isOpen,
  id,
}: DrawerMenuProps) {
  return (
    /* NOTE: 'is-store' is-active 설정 */
    <div
      className={`DrawerMenu ${className}${isOpen[id] ? ' is-open' : ''}${
        className === 'is-store' ? ' is-active' : ''
      }`}
    >
      {children}
      <div className="DrawerMenu-content">
        <ul className="DrawerMenu-list">
          {contents.map((item, idx) => {
            return (
              /* NOTE: '기획전' is-active 설정 */
              <li
                className={`DrawerMenu-item${
                  item === '기획전' ? ' is-active' : ''
                }`}
                key={idx}
              >
                <a href="/">
                  {item}

                  {/* NOTE: '기획전' is-active 설정 */}
                  {item === '기획전' && (
                    <i className="ic-new" lang="en" aria-label="New"></i>
                  )}
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
