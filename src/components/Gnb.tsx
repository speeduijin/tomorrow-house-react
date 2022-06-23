import Logo from '../assets/images/Logo.svg'
import GnbNav from './GnbNav'
import GnbIconButton from './GnbIconButton'
import './Gnb.scss'

function Gnb() {
  return (
    <div className="gnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="gnb-wrapper">
              <div className="gnb-left">
                <h1 className="logo">
                  <a href="/">
                    <img src={Logo} alt="내일의 집" />
                  </a>
                </h1>

                <GnbNav />

                <GnbIconButton
                  isButton="true"
                  className="is-menu sm-only"
                  ariaLabel="메뉴 열기 버튼"
                  iClassName="ic-menu"
                />
              </div>

              <div className="gnb-right">
                <div className="gnb-search lg-only">
                  <div className="input-group">
                    <i className="ic-search" aria-hidden></i>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="스토어 검색"
                    />
                  </div>

                  <section className="search-history">
                    <header className="search-history-header">
                      <h2 className="title">최근 검색어</h2>
                      <button type="button">전체 삭제</button>
                    </header>

                    <div className="search-history-content">
                      <ol className="search-history-list">
                        <li className="search-history-item">
                          <button className="word-button" type="button">
                            김버그
                          </button>
                          <button
                            className="delete-button"
                            type="button"
                            aria-label="검색어 삭제"
                          >
                            <i className="ic-close"></i>
                          </button>
                        </li>
                        <li className="search-history-item">
                          <button className="word-button" type="button">
                            버그
                          </button>
                          <button
                            className="delete-button"
                            type="button"
                            aria-label="검색어 삭제"
                          >
                            <i className="ic-close"></i>
                          </button>
                        </li>
                        <li className="search-history-item">
                          <button className="word-button" type="button">
                            튕김버그
                          </button>
                          <button
                            className="delete-button"
                            type="button"
                            aria-label="검색어 삭제"
                          >
                            <i className="ic-close"></i>
                          </button>
                        </li>
                      </ol>
                    </div>
                  </section>
                </div>

                {/* NOTE: 로그인을 한 경우   */}
                <div className="button-group">
                  <GnbIconButton
                    isButton="true"
                    className="is-search lg-hidden"
                    ariaLabel="검색창 열기 버튼"
                    iClassName="ic-search"
                  />

                  <GnbIconButton
                    isButton="false"
                    className="sm-hidden"
                    ariaLabel="스크랩북 페이지로 이동"
                    iClassName="ic-bookmark"
                  />

                  <GnbIconButton
                    isButton="false"
                    className="sm-hidden"
                    ariaLabel="내 소식 페이지로 이동"
                    iClassName="ic-bell"
                  />

                  <GnbIconButton
                    isButton="false"
                    className="is-cart"
                    ariaLabel="장바구니 페이지로 이동"
                    iClassName="ic-cart"
                  />

                  <div className="my-menu sm-hidden">
                    <button
                      className="my-menu-button"
                      type="button"
                      aria-label="마이메뉴 열기 버튼"
                    >
                      <img
                        src="./assets/images/img-user-01.jpg"
                        alt="사달라 아저씨"
                      />
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
                </div>

                {/* NOTE: 로그인을 하지 않은 경우  */}
                {/* <div className="button-group">
                    <button
                      className="gnb-icon-button is-search lg-hidden"
                      type="button"
                      aria-label="검색창 열기 버튼"
                    >
                      <i className="ic-search"></i>
                    </button>
                    <a
                      className="gnb-icon-button is-cart"
                      href="/"
                      aria-label="장바구니 페이지로 이동"
                    >
                      <i className="ic-cart"></i>
                    </a>
                    <div className="gnb-auth sm-hidden">
                      <a href="/">로그인</a>
                      <a href="/">회원가입</a>
                    </div>
                  </div> */}

                <button className="btn-primary btn-40 sm-hidden" type="button">
                  글쓰기
                  <i className="ic-chevron" aria-hidden></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gnb
