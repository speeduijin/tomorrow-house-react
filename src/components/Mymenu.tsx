import imgUser01 from '../assets/images/img-user-01.jpg'
import './my-menu.scss'

function Mymenu() {
  return (
    <div className="my-menu sm-hidden">
      <button
        className="my-menu-button"
        type="button"
        aria-label="마이메뉴 열기 버튼"
      >
        <img src={imgUser01} alt="사달라 아저씨" />
      </button>

      <div className="my-menu-content">
        <ul className="my-menu-list">
          <li className="my-menu-item">
            <a href="/">마이페이지</a>
          </li>
          <li className="my-menu-item">
            <a href="/">나의 쇼핑</a>
          </li>
          <li className="my-menu-item">
            <a href="/">이벤트</a>
          </li>
          <li className="my-menu-item">
            <button type="button">로그아웃</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Mymenu
