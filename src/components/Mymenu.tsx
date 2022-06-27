import imgUser01 from '../assets/images/img-user-01.jpg'
import './Mymenu.scss'

function Mymenu() {
  return (
    <div className="Mymenu sm-hidden">
      <button
        className="Mymenu-button"
        type="button"
        aria-label="마이메뉴 열기 버튼"
      >
        <img src={imgUser01} alt="사달라 아저씨" />
      </button>

      <div className="Mymenu-content">
        <ul className="Mymenu-list">
          <li className="Mymenu-item">
            <a href="/">마이페이지</a>
          </li>
          <li className="Mymenu-item">
            <a href="/">나의 쇼핑</a>
          </li>
          <li className="Mymenu-item">
            <a href="/">이벤트</a>
          </li>
          <li className="Mymenu-item">
            <button type="button">로그아웃</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Mymenu
