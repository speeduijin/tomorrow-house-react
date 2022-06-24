import Logo from '../assets/images/Logo.svg'
import GnbNav from '../components/GnbNav'
import GnbIconButton from '../components/GnbIconButton'
import SearchHistory from '../components/SearchHistory'
import Mymenu from '../components/Mymenu'
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

                  <SearchHistory />
                </div>

                {/* NOTE: 로그인을 한 경우   */}
                <div className="button-group">
                  <GnbIconButton
                    className="is-search lg-hidden"
                    ariaLabel="검색창 열기 버튼"
                    iClassName="ic-search"
                  />

                  <GnbIconButton
                    className="sm-hidden"
                    ariaLabel="스크랩북 페이지로 이동"
                    iClassName="ic-bookmark"
                  />

                  <GnbIconButton
                    className="sm-hidden"
                    ariaLabel="내 소식 페이지로 이동"
                    iClassName="ic-bell"
                  />

                  <GnbIconButton
                    className="is-cart"
                    ariaLabel="장바구니 페이지로 이동"
                    iClassName="ic-cart"
                  />

                  <Mymenu />
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
