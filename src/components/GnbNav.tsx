import './GnbNav.scss'

function GnbNav() {
  return (
    <nav className="GnbNav sm-hidden">
      <h2 className="visually-hidden">메뉴</h2>
      <ul className="GnbNav-list">
        <li className="GnbNav-item">
          <a href="/">커뮤니티</a>
        </li>
        <li className="GnbNav-item is-active">
          <a href="/">스토어</a>
        </li>
        <li className="GnbNav-item">
          <a href="/">인테리어시공</a>
        </li>
      </ul>
    </nav>
  )
}

export default GnbNav
