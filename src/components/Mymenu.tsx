import imgUser01 from '../assets/images/img-user-01.jpg'
import './MyMenu.scss'

function Mymenu() {
  const items = ['마이페이지', '나의 쇼핑', '이벤트', '로그아웃']

  const MyMenuItem = items.map((item, idx) => {
    return (
      <li className="MyMenu-item" key={idx}>
        {item === '로그아웃' ? (
          <button type="button">{item}</button>
        ) : (
          <a href="/">{item}</a>
        )}
      </li>
    )
  })

  return (
    <div className="MyMenu sm-hidden is-active">
      <button
        className="MyMenu-button"
        type="button"
        aria-label="마이메뉴 열기 버튼"
      >
        <img src={imgUser01} alt="사달라 아저씨" />
      </button>

      <div className="MyMenu-content">
        <ul className="MyMenu-list">{MyMenuItem}</ul>
      </div>
    </div>
  )
}

export default Mymenu
