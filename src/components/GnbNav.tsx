import './GnbNav.scss'

function GnbNav() {
  const items = ['커뮤니티', '스토어', '인테리어시공']

  return (
    <nav className="GnbNav sm-hidden">
      <h2 className="visually-hidden">메뉴</h2>
      <ul className="GnbNav-list">
        {items.map((item, idx) => {
          return (
            <li
              className={`GnbNav-item${item === '스토어' ? ' is-active' : ''}`}
              key={idx}
            >
              <a href="/">{item}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default GnbNav
