import './GnbNav.scss'

interface GnbNavProps {
  navInfo: {
    id: number
    globalNavItem: string
  }[]
  isActiveGnbNavItem: boolean[]
  setIsActiveGnbNavItem: React.Dispatch<React.SetStateAction<boolean[]>>
}

function GnbNav({
  navInfo,
  isActiveGnbNavItem,
  setIsActiveGnbNavItem,
}: GnbNavProps) {
  const gnbNavItems = navInfo.map((item) => {
    const moveGlobalNavItem = (event: React.MouseEvent<HTMLLIElement>) => {
      // 이동할 수 있는 페이지 없기 때문에
      event.preventDefault()

      const copy = [...isActiveGnbNavItem]
      copy[item.id] !== true && copy.fill(false)
      copy[item.id] = !copy[item.id]
      setIsActiveGnbNavItem(copy)
    }

    const isActive = isActiveGnbNavItem[item.id] ? 'is-active' : ''

    return (
      <li
        className={`GnbNav-item ${isActive}`}
        key={item.id}
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
