import DrawerMenuButton from './DrawerMenuButton'
import './DrawerMenu.scss'

interface DrawerMenuProps {
  className: string
  contents: string[]
  buttonIClassName: string
  buttonContent: string
  isOpen: boolean[]
  id: number
  handleToggle: (id: number) => void
}

function DrawerMenu(props: DrawerMenuProps) {
  return (
    // 'is-stre' is-active 설정
    <div
      className={`DrawerMenu ${props.className} ${
        props.isOpen[props.id] ? 'is-open' : ''
      } ${props.className === 'is-store' ? 'is-active' : ''}`}
    >
      <DrawerMenuButton
        iClassName={props.buttonIClassName}
        content={props.buttonContent}
        id={props.id}
        handleToggle={props.handleToggle}
      />

      <div className="DrawerMenu-content">
        <ul className="DrawerMenu-list">
          {props.contents.map((item, idx) => {
            return (
              <li
                className={`DrawerMenu-item ${
                  item === '기획전' && 'is-active'
                }`}
                key={idx}
              >
                <a href="/">
                  {item}
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
