import './GnbNav.scss'

interface GnbNavProps {
  navInfo: {
    globalNavItem: string
  }[]
  isActiveGnbNav: boolean[]
  setIsActiveGnbNav: React.Dispatch<React.SetStateAction<boolean[]>>
}

function GnbNav({ navInfo, isActiveGnbNav, setIsActiveGnbNav }: GnbNavProps) {
  const gnbNavItems = navInfo.map((item, idx) => {
    const isActive = isActiveGnbNav[idx] ? 'is-active' : ''

    const moveGlobalNavItem = (e: React.MouseEvent<HTMLLIElement>) => {
      // 이동할 수 있는 페이지 없기 때문에
      e.preventDefault()

      const copy = [...isActiveGnbNav]
      copy[idx] !== true && copy.fill(false)
      copy[idx] = !copy[idx]
      setIsActiveGnbNav(copy)
    }
    return (
      <li
        className={`GnbNav-item ${isActive}`}
        key={idx}
        onClick={moveGlobalNavItem}
      >
        <a href="/">{item.globalNavItem}</a>
      </li>
    )
  })

  return (
    <nav className="GnbNav sm-hidden">
      <h2 className="visually-hidden">메뉴</h2>
      <ul className="GnbNav-list">{gnbNavItems}</ul>
    </nav>
  )
}

export default GnbNav
