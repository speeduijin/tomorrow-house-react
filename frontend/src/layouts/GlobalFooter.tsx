import './GlobalFooter.scss'

function GlobalFooter() {
  return (
    <footer className="GlobalFooter">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="GlobalFooter-title">
              고객센터
              <i className="ic-chevron" aria-hidden></i>
            </h3>
            <a className="GlobalFooter-contact" href="tel:10041004">
              1004-1004
            </a>
            <p className="GlobalFooter-time">
              평일 09:00 ~ 18:00 (주말 &amp; 공휴일 제외)
            </p>

            <dl className="GlobalFooter-detail-list">
              <div className="GlobalFooter-detail-item">
                <dt>상호명</dt>
                <dd>빠르다 의진</dd>
              </div>
              <div className="GlobalFooter-detail-item">
                <dt>이메일</dt>
                <dd>
                  <address>
                    <a href="mailto:fehler@gmail.com">fehler@gmail.com</a>
                  </address>
                  (제휴문의)
                </dd>
              </div>
              <div className="GlobalFooter-detail-item">
                <dt>대표이사</dt>
                <dd>의진</dd>
              </div>
              <div className="GlobalFooter-detail-item">
                <dt>주소</dt>
                <dd>
                  <address>
                    <a
                      href="https://github.com/speeduijin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/speeduijin
                    </a>
                  </address>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default GlobalFooter
