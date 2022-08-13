import BreadCrumb from '../components/BreadCrumb'
import ProductCarousel from '../components/ProductCarousel'
import ProductInfo from '../components/ProductInfo'
import OrderForm from '../components/OrderForm'

function ProductShow() {
  return (
    <main className="ProductShow">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <BreadCrumb />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-6 col-lg-7">
            <ProductCarousel />
          </div>

          <div className="col-sm-4 col-md-6 col-lg-5">
            <ProductInfo />

            {/* <OrderForm /> */}
          </div>
        </div>

        {/* <div className="row sm-only">
          <div className="col-sm-4">
            <div className="product-section-divider" aria-hidden></div>
            <section className="product-section product-user-gallery">
              <header className="product-section-header">
                <h1 className="title">유저들의 스타일링샷</h1>
                <strong className="badge" aria-label="461개">461</strong>

                <a className="icon-button is-right" href="/" aria-label="더보기">
                  <i className="ic-chevron" aria-hidden></i>
                </a>
              </header>

              <div className="product-section-content">
                <div className="user-gallery is-mobile" role="region">
                  <div className="user-gallery-slider">
                    <ol className="slider-list">
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby="user-gallery-tab-1"
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img
                              src="./assets/images/img-review-01.jpg"
                              alt=""
                            />
                            <figcaption className="visually-hidden">
                              김버그 님의 스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                              <img
                                src="./assets/images/img-user-02.jpg"
                                alt="김버그"
                              />
                            </a>
                            <a className="username" href="/">김버그</a>
                            <span className="order">1/461</span>
                          </div>
                        </div>
                      </li>
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby="user-gallery-tab-2"
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img
                              src="./assets/images/img-review-02.jpg"
                              alt=""
                            />
                            <figcaption className="visually-hidden">
                              샤먼 님의 스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                              <img
                                src="./assets/images/img-user-03.jpg"
                                alt="샤먼"
                              />
                            </a>
                            <a className="username" href="/">샤먼</a>
                            <span className="order">2/461</span>
                          </div>
                        </div>
                      </li>
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby="user-gallery-tab-3"
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img
                              src="./assets/images/img-review-03.jpg"
                              alt=""
                            />
                            <figcaption className="visually-hidden">
                              마샬 님의 스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                              <img
                                src="./assets/images/img-user-05.jpg"
                                alt="마샬"
                              />
                            </a>
                            <a className="username" href="/">마샬</a>
                            <span className="order">3/461</span>
                          </div>
                        </div>
                      </li>
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby="user-gallery-tab-4"
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img
                              src="./assets/images/img-review-04.jpg"
                              alt=""
                            />
                            <figcaption className="visually-hidden">
                              사달라 님의 스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                              <img
                                src="./assets/images/img-user-01.jpg"
                                alt="사달라"
                              />
                            </a>
                            <a className="username" href="/">사달라</a>
                            <span className="order">4/461</span>
                          </div>
                        </div>
                      </li>
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby="user-gallery-tab-5"
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img
                              src="./assets/images/img-review-05.jpg"
                              alt=""
                            />
                            <figcaption className="visually-hidden">
                              초코송이 님의 스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                              <img
                                src="./assets/images/img-user-06.jpg"
                                alt="초코송이"
                              />
                            </a>
                            <a className="username" href="/">초코송이</a>
                            <span className="order">5/461</span>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="user-gallery-thumbnail">
                    <ol className="thumbnail-list" role="tablist">
                      <li
                        className="thumbnail-item"
                        id="user-gallery-tab-1"
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src="./assets/images/img-review-01.jpg"
                            alt="
                          1번 스타일링샷"
                          />
                        </button>
                      </li>
                      <li
                        className="thumbnail-item"
                        id="user-gallery-tab-2"
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src="./assets/images/img-review-02.jpg"
                            alt="
                          2번 스타일링샷"
                          />
                        </button>
                      </li>
                      <li
                        className="thumbnail-item"
                        id="user-gallery-tab-3"
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src="./assets/images/img-review-03.jpg"
                            alt="
                          3번 스타일링샷"
                          />
                        </button>
                      </li>
                      <li
                        className="thumbnail-item"
                        id="user-gallery-tab-4"
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src="./assets/images/img-review-04.jpg"
                            alt="
                          4번 스타일링샷"
                          />
                        </button>
                      </li>
                      <li
                        className="thumbnail-item"
                        id="user-gallery-tab-5"
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src="./assets/images/img-review-05.jpg"
                            alt="
                          5번 스타일링샷"
                          />
                        </button>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="product-section-divider is-big" aria-hidden></div>
          </div>
        </div>
      </div>

      <div className="product-tab">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-lg-8">
              <ul className="product-tab-list" role="tablist">
                <li
                  className="product-tab-item"
                  role="tab"
                  aria-labelledby="product-spec"
                >
                  <button type="button">상품정보</button>
                </li>
                <li
                  className="product-tab-item"
                  role="tab"
                  aria-labelledby="product-review"
                >
                  <button type="button">
                    리뷰
                    <strong className="badge" aria-label="566개 리뷰">566</strong>
                  </button>
                </li>
                <li
                  className="product-tab-item"
                  role="tab"
                  aria-labelledby="product-inquiry"
                >
                  <button type="button">
                    문의
                    <strong className="badge" aria-label="96개 문의">96</strong>
                  </button>
                </li>
                <li
                  className="product-tab-item"
                  role="tab"
                  aria-labelledby="product-shipment"
                >
                  <button type="button">배송/환불</button>
                </li>
                <li
                  className="product-tab-item"
                  role="tab"
                  aria-labelledby="product-recommendation"
                >
                  <button type="button">추천</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            <section className="product-section product-user-gallery sm-hidden">
              <header className="product-section-header">
                <h1 className="title">유저들의 스타일링샷</h1>
                <strong className="badge" aria-label="461개">461</strong>

                <a className="icon-button is-right" href="/" aria-label="더보기">
                  <i className="ic-chevron" aria-hidden></i>
                </a>
              </header>

              <div className="product-section-content">
                <div className="user-gallery is-desktop" role="region">
                  <div className="user-gallery-slider">
                    <ol className="slider-list">
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby="user-gallery-tab-1"
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img
                              src="./assets/images/img-review-01.jpg"
                              alt=""
                            />
                            <figcaption className="visually-hidden">
                              김버그 님의 스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                              <img
                                src="./assets/images/img-user-02.jpg"
                                alt="김버그"
                              />
                            </a>
                            <a className="username" href="/">김버그</a>
                            <span className="order">1/461</span>
                          </div>
                        </div>
                      </li>
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby="user-gallery-tab-2"
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img
                              src="./assets/images/img-review-02.jpg"
                              alt=""
                            />
                            <figcaption className="visually-hidden">
                              샤먼 님의 스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                              <img
                                src="./assets/images/img-user-03.jpg"
                                alt="샤먼"
                              />
                            </a>
                            <a className="username" href="/">샤먼</a>
                            <span className="order">2/461</span>
                          </div>
                        </div>
                      </li>
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby="user-gallery-tab-3"
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img
                              src="./assets/images/img-review-03.jpg"
                              alt=""
                            />
                            <figcaption className="visually-hidden">
                              마샬 님의 스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                              <img
                                src="./assets/images/img-user-05.jpg"
                                alt="마샬"
                              />
                            </a>
                            <a className="username" href="/">마샬</a>
                            <span className="order">3/461</span>
                          </div>
                        </div>
                      </li>
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby="user-gallery-tab-4"
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img
                              src="./assets/images/img-review-04.jpg"
                              alt=""
                            />
                            <figcaption className="visually-hidden">
                              사달라 님의 스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                              <img
                                src="./assets/images/img-user-01.jpg"
                                alt="사달라"
                              />
                            </a>
                            <a className="username" href="/">사달라</a>
                            <span className="order">4/461</span>
                          </div>
                        </div>
                      </li>
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby="user-gallery-tab-5"
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img
                              src="./assets/images/img-review-05.jpg"
                              alt=""
                            />
                            <figcaption className="visually-hidden">
                              초코송이 님의 스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <a className="avatar-32" href="/">
                              <img
                                src="./assets/images/img-user-06.jpg"
                                alt="초코송이"
                              />
                            </a>
                            <a className="username" href="/">초코송이</a>
                            <span className="order">5/461</span>
                          </div>
                        </div>
                      </li>
                    </ol>

                    <div className="user-gallery-controls sm-hidden">
                      <button
                        className="control-button is-prev"
                        type="button"
                        aria-label="이전 이미지"
                      >
                        <i className="ic-chevron" aria-hidden></i>
                      </button>
                      <button
                        className="control-button is-next"
                        type="button"
                        aria-label="다음 이미지"
                      >
                        <i className="ic-chevron" aria-hidden></i>
                      </button>
                    </div>
                  </div>

                  <div className="user-gallery-thumbnail">
                    <ol className="thumbnail-list" role="tablist">
                      <li
                        className="thumbnail-item"
                        id="user-gallery-tab-1"
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src="./assets/images/img-review-01.jpg"
                            alt="
                          1번 스타일링샷"
                          />
                        </button>
                      </li>
                      <li
                        className="thumbnail-item"
                        id="user-gallery-tab-2"
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src="./assets/images/img-review-02.jpg"
                            alt="
                          2번 스타일링샷"
                          />
                        </button>
                      </li>
                      <li
                        className="thumbnail-item"
                        id="user-gallery-tab-3"
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src="./assets/images/img-review-03.jpg"
                            alt="
                          3번 스타일링샷"
                          />
                        </button>
                      </li>
                      <li
                        className="thumbnail-item"
                        id="user-gallery-tab-4"
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src="./assets/images/img-review-04.jpg"
                            alt="
                          4번 스타일링샷"
                          />
                        </button>
                      </li>
                      <li
                        className="thumbnail-item"
                        id="user-gallery-tab-5"
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src="./assets/images/img-review-05.jpg"
                            alt="
                          5번 스타일링샷"
                          />
                        </button>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="product-section product-spec is-open"
              id="product-spec"
              role="tabpanel"
            >
              <header className="product-section-header sm-hidden">
                <h1 className="title">상품 정보</h1>
              </header>

              <div className="product-section-content">
                <div className="button-wrapper sm-only">
                  <button className="btn-primary btn-55" type="button">
                    펼치기
                  </button>
                </div>

                <figure>
                  <img src="./assets/images/img-detail-01.jpg" alt="" />
                  <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 01
                  </figcaption>
                </figure>
                <figure>
                  <img src="./assets/images/img-detail-02.jpg" alt="" />
                  <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 02
                  </figcaption>
                </figure>
                <figure>
                  <img src="./assets/images/img-detail-03.jpg" alt="" />
                  <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 03
                  </figcaption>
                </figure>
                <figure>
                  <img src="./assets/images/img-detail-04.jpg" alt="" />
                  <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 04
                  </figcaption>
                </figure>
                <figure>
                  <img src="./assets/images/img-detail-05.jpg" alt="" />
                  <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 05
                  </figcaption>
                </figure>
                <figure>
                  <img src="./assets/images/img-detail-06.jpg" alt="" />
                  <figcaption className="visually-hidden">
                    보아르 전기 히터 상세 이미지 06
                  </figcaption>
                </figure>

                <table className="product-table">
                  <tbody>
                    <tr>
                      <th scope="row">품명 및 모델명</th>
                      <td>VO-HT015</td>
                    </tr>
                    <tr>
                      <th scope="row">KC 인증 필 유무</th>
                      <td>SU071586-19003</td>
                    </tr>
                    <tr>
                      <th scope="row">정격전압, 소비전력</th>
                      <td>AC220V, 60Hz, 400W</td>
                    </tr>
                    <tr>
                      <th scope="row">에너지소비효율등급</th>
                      <td>해당사항없음</td>
                    </tr>
                    <tr>
                      <th scope="row">동일모델의 출시년월</th>
                      <td>2019.11</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        제조자, 수입품의 경우 수입자를 함께 표기
                      </th>
                      <td>보아르주식회사</td>
                    </tr>
                    <tr>
                      <th scope="row">제조국</th>
                      <td>중국</td>
                    </tr>
                    <tr>
                      <th scope="row">크기</th>
                      <td>338*122*300 mm</td>
                    </tr>
                    <tr>
                      <th scope="row">냉난방면적</th>
                      <td>개인용</td>
                    </tr>
                    <tr>
                      <th scope="row">추가설치비용</th>
                      <td>해당사항없음</td>
                    </tr>
                    <tr>
                      <th scope="row">품질보증기준</th>
                      <td>구매일로부터 1년 이내 무상 A/S가능</td>
                    </tr>
                    <tr>
                      <th scope="row">A/S 책임자와 전화번호</th>
                      <td>1661-4555</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <div className="product-section-divider sm-only" aria-hidden></div>

            <section
              className="product-section product-review"
              id="product-review"
              role="tabpanel"
            >
              <header className="product-section-header">
                <h1 className="title">리뷰</h1>
                <strong className="badge" aria-label="566개">566</strong>
                <a className="text-button" href="/">리뷰쓰기</a>
              </header>

              <div className="product-section-content">
                <div className="review-scoreboard">
                  <div className="score-summary">
                    <strong className="average-score" aria-label="평점 4.8">
                      4.8
                    </strong>
                    <div className="star-rating">
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                      <i className="ic-star is-active"></i>
                    </div>
                  </div>

                  <div className="score-detail">
                    <dl className="score-stats-list">
                      <div className="score-stats-item is-active">
                        <dt>5점</dt>
                        <dd>
                          <div className="bar-graph" aria-hidden>
                            <div
                              className="active-bar"
                              style="width: 82.5088339223%"
                            ></div>
                          </div>
                          <strong className="count" aria-label="467명">467</strong>
                        </dd>
                      </div>

                      <div className="score-stats-item">
                        <dt>4점</dt>
                        <dd>
                          <div className="bar-graph" aria-hidden>
                            <div
                              className="active-bar"
                              style="width: 15.371024735%"
                            ></div>
                          </div>
                          <strong className="count" aria-label="87명">87</strong>
                        </dd>
                      </div>

                      <div className="score-stats-item">
                        <dt>3점</dt>
                        <dd>
                          <div className="bar-graph" aria-hidden>
                            <div
                              className="active-bar"
                              style="width: 2.296819788%"
                            ></div>
                          </div>
                          <strong className="count" aria-label="13명">13</strong>
                        </dd>
                      </div>

                      <div className="score-stats-item">
                        <dt>2점</dt>
                        <dd>
                          <div className="bar-graph" aria-hidden>
                            <div className="active-bar"></div>
                          </div>
                          <strong className="count" aria-label="0명">0</strong>
                        </dd>
                      </div>

                      <div className="score-stats-item">
                        <dt>1점</dt>
                        <dd>
                          <div className="bar-graph" aria-hidden>
                            <div className="active-bar"></div>
                          </div>
                          <strong className="count" aria-label="0명">0</strong>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <ol className="review-list">
                  <li className="review-item">
                    <article className="review-card">
                      <header className="review-card-header">
                        <h3 className="visually-hidden">김버그 님이 작성한 리뷰</h3>

                        <a className="avatar-24" href="/">
                          <img
                            src="./assets/images/img-user-02.jpg"
                            alt="김버그"
                          />
                        </a>

                        <div className="info">
                          <a className="username" href="/">
                            <strong>김버그</strong>
                          </a>

                          <div className="detail">
                            <div
                              className="star-rating-13"
                              aria-label="5.0점 / 5.0점"
                            >
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                            </div>

                            <div className="misc">
                              <time datetime="2021-01-01"> 2021.01.01 </time>
                              <span>오늘의집 구매</span>
                            </div>
                          </div>
                        </div>
                      </header>

                      <div className="review-card-body">
                        <p>
                          집 전체를 데운다기보다는 틀어놓고 앞에 앉아있으면
                          따땃해지는 정도예요. 불 꺼놓고 난로 켜고 담요 덮은
                          채로 커피 마시면 아주 좋아요. 고양이도 좋아해요
                        </p>
                      </div>

                      <footer className="review-card-footer">
                        <button className="btn-outlined btn-32" type="button">
                          도움이 돼요
                        </button>

                        <p>
                          <strong><span>3</span>명</strong>에게 도움이
                          되었습니다.
                        </p>
                      </footer>
                    </article>
                  </li>

                  <!-- NOTE: 유저 이미지가 없는 경우 -->
                  <li className="review-item">
                    <article className="review-card">
                      <header className="review-card-header">
                        <h3 className="visually-hidden">
                          우유파이 님이 작성한 리뷰
                        </h3>

                        <a
                          className="avatar-24"
                          href="/"
                          aria-label="우유파이 님의 프로필로 이동"
                        >
                        </a>

                        <div className="info">
                          <a className="username" href="/">
                            <strong>우유파이</strong>
                          </a>

                          <div className="detail">
                            <div
                              className="star-rating-13"
                              aria-label="5.0점 / 5.0점"
                            >
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star"></i>
                            </div>

                            <div className="misc">
                              <time datetime="2021-01-01"> 2021.01.01 </time>
                              <span>오늘의집 구매</span>
                            </div>
                          </div>
                        </div>
                      </header>

                      <div className="review-card-body">
                        <p>
                          작업실에서 손이 시려워서 책상 위에 올려서 쓸걸로
                          골랐습니다! 아주아주 뜨듯하고 크기도 적당하고 민트
                          사고싶엇지만 품절 ㅠㅠ
                        </p>
                      </div>

                      <footer className="review-card-footer">
                        <button className="btn-outlined btn-32" type="button">
                          도움이 돼요
                        </button>

                        <p>
                          <strong><span>12</span>명</strong>에게 도움이
                          되었습니다.
                        </p>
                      </footer>
                    </article>
                  </li>

                  <!-- NOTE: 유저가 리뷰 이미지를 올린 경우 -->
                  <li className="review-item">
                    <article className="review-card">
                      <header className="review-card-header">
                        <h3 className="visually-hidden">
                          고영희님이좋아합니다 님이 작성한 리뷰
                        </h3>

                        <a className="avatar-24" href="/">
                          <img
                            src="./assets/images/img-user-03.jpg"
                            alt="고영희님이좋아합니다"
                          />
                        </a>

                        <div className="info">
                          <a className="username" href="/">
                            <strong>고영희님이좋아합니다</strong>
                          </a>

                          <div className="detail">
                            <div
                              className="star-rating-13"
                              aria-label="5.0점 / 5.0점"
                            >
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                            </div>

                            <div className="misc">
                              <time datetime="2021-01-01"> 2021.01.01 </time>
                              <span>오늘의집 구매</span>
                            </div>
                          </div>
                        </div>
                      </header>

                      <div className="review-card-body">
                        <div className="review-image">
                          <img
                            src="./assets/images/img-review-01.jpg"
                            alt="고영희님이좋아합니다 님의 리뷰 사진"
                          />
                        </div>
                        <p>
                          고양이가 좋아해요 ㅎㅎ 섬세한 온도조절이 안되는게
                          아쉽지만, 이 가격 이 디자인이면 만족할 수 밖에 없어요
                          :) 좋습니다!
                        </p>
                      </div>

                      <footer className="review-card-footer">
                        <button className="btn-outlined btn-32" type="button">
                          도움이 돼요
                        </button>

                        <p>
                          <strong><span>7</span>명</strong>에게 도움이
                          되었습니다.
                        </p>
                      </footer>
                    </article>
                  </li>

                  <!-- NOTE: 사용자가 도움됨을 체크, 도움됨 1+ -->
                  <li className="review-item">
                    <article className="review-card">
                      <header className="review-card-header">
                        <h3 className="visually-hidden">쿠쿠 님이 작성한 리뷰</h3>

                        <a className="avatar-24" href="/">
                          <img
                            src="./assets/images/img-user-04.jpg"
                            alt="쿠쿠"
                          />
                        </a>

                        <div className="info">
                          <a className="username" href="/">
                            <strong>쿠쿠</strong>
                          </a>

                          <div className="detail">
                            <div
                              className="star-rating-13"
                              aria-label="5.0점 / 5.0점"
                            >
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star"></i>
                              <i className="ic-star"></i>
                            </div>

                            <div className="misc">
                              <time datetime="2021-01-01"> 2021.01.01 </time>
                              <span>오늘의집 구매</span>
                            </div>
                          </div>
                        </div>
                      </header>

                      <div className="review-card-body">
                        <p>
                          오래된 아파트 확장된 방이라 외풍이 너무 심해 급하게
                          구매했습니다! 예약배송이라 10일 가까이 기다렸는데
                          너무너무 만족스러워요~ :) 방이 큰 편이라 전체가 다
                          따뜻해지길 바라지도 않았고, 후기를 먼저 봤던터라 크게
                          기대를 안햇었는데 기대 이상입니다. 틀어놓으면 확실히
                          방 공기가 달라져요! 후끈!!! 까진 아니어도 차가운
                          공기가 따뜻해집니다~ 만족스러워요!!! 올 겨울 덕분에
                          떨지 않고 보낼 수 있을것 같습니당
                        </p>
                      </div>

                      <footer className="review-card-footer">
                        <button className="btn-primary btn-32" type="button">
                          <i className="ic-check" aria-hidden></i>
                          도움됨
                        </button>

                        <p>
                          <strong><span>1</span>명</strong>에게 도움이
                          되었습니다.
                        </p>
                      </footer>
                    </article>
                  </li>

                  <!-- NOTE: 사용자가 도움됨을 미체크, 도움됨 X -->
                  <li className="review-item">
                    <article className="review-card">
                      <header className="review-card-header">
                        <h3 className="visually-hidden">
                          빅토리아 님이 작성한 리뷰
                        </h3>

                        <a className="avatar-24" href="/">
                          <img
                            src="./assets/images/img-user-05.jpg"
                            alt="빅토리아"
                          />
                        </a>

                        <div className="info">
                          <a className="username" href="/">
                            <strong>빅토리아</strong>
                          </a>

                          <div className="detail">
                            <div
                              className="star-rating-13"
                              aria-label="5.0점 / 5.0점"
                            >
                              <i className="ic-star is-active"></i>
                              <i className="ic-star is-active"></i>
                              <i className="ic-star"></i>
                              <i className="ic-star"></i>
                              <i className="ic-star"></i>
                            </div>

                            <div className="misc">
                              <time datetime="2021-01-01"> 2021.01.01 </time>
                              <span>오늘의집 구매</span>
                            </div>
                          </div>
                        </div>
                      </header>

                      <div className="review-card-body">
                        <p>가격 대비 만족합니다.</p>
                      </div>

                      <footer className="review-card-footer">
                        <button className="btn-outlined btn-32" type="button">
                          도움이 돼요
                        </button>
                      </footer>
                    </article>
                  </li>
                </ol>

                <div className="pagination">
                  <ol className="page-list">
                    <li className="page-item is-active">
                      <a href="/">1</a>
                    </li>
                    <li className="page-item">
                      <a href="/">2</a>
                    </li>
                    <li className="page-item">
                      <a href="/">3</a>
                    </li>
                    <li className="page-item">
                      <a href="/">4</a>
                    </li>
                    <li className="page-item">
                      <a href="/">5</a>
                    </li>
                  </ol>
                  <button className="page-control page-next" type="button">
                    <i className="ic-chevron"></i>
                  </button>
                </div>
              </div>
            </section>
            <div className="product-section-divider sm-only" aria-hidden></div>

            <!-- NOTE: 리뷰가 0개일 경우 -->
            <!-- <section
              className="product-section product-review"
              id="product-review"
              role="tabpanel"
            >
              <header className="product-section-header">
                <h1 className="title">리뷰</h1>
                <strong className="badge" aria-label="0개">0</strong>
                <a className="text-button" href="/">리뷰쓰기</a>
              </header>
              <div className="product-section-content">
                <p className="review-empty">
                  첫 리뷰를 남겨주세요! <br />
                  최대 <strong>500P</strong>를 드립니다.
                </p>
              </div>
            </section>
            <div className="product-section-divider sm-only" aria-hidden></div> -->

            <section
              className="product-section product-inquiry is-open"
              id="product-inquiry"
              role="tabpanel"
            >
              <header className="product-section-header">
                <h1 className="title">문의</h1>
                <strong className="badge" aria-label="96개">96</strong>

                <a className="text-button" href="/">문의하기</a>
                <button
                  className="icon-button sm-only"
                  type="button"
                  aria-label="더보기"
                >
                  <i className="ic-chevron" aria-hidden></i>
                </button>
              </header>

              <div className="product-section-content">
                <ol className="inquiry-list">
                  <li className="inquiry-item">
                    <article className="inquiry-card">
                      <header className="inquiry-card-header">
                        <h3 className="visually-hidden">지* 님이 남기신 문의</h3>

                        <dl className="detail">
                          <dt className="visually-hidden">구매 여부</dt>
                          <dd>구매</dd>
                          <dt className="visually-hidden">문의 유형</dt>
                          <dd>상품</dd>
                          <dt className="visually-hidden">답변 여부</dt>
                          <dd>미답변</dd>
                        </dl>

                        <div className="misc">
                          <strong>지*</strong>
                          <time datetime="2021-01-02 21:41">
                            2021년 1월 2일 21시 41분
                          </time>
                        </div>
                      </header>

                      <div className="inquiry-card-body">
                        <div className="inquiry-content">
                          <span aria-label="문의 내용">Q</span>
                          <p>
                            상품받았는데 <br />
                            사용하면서 보니까 불들어오는곳 옆에<br />
                            하얀 부분이 갈색으로 얼룩져있는데 불량인가요...?<br />
                            위험하지는 않겠죠? 다른분들 후기사진에는 다 깨끗한
                            것 같아서요!<br />
                            사진첨부가없어서 텍스트로 설명하려 하니
                            애매하네요ㅠㅠ
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>

                  <!-- NOTE: 비밀글일 경우 -->
                  <li className="inquiry-item">
                    <article className="inquiry-card">
                      <header className="inquiry-card-header">
                        <h3 className="visually-hidden">지* 님이 남기신 문의</h3>

                        <dl className="detail">
                          <dt className="visually-hidden">구매 여부</dt>
                          <dd>비구매</dd>
                          <dt className="visually-hidden">문의 유형</dt>
                          <dd>상품</dd>
                          <dt className="visually-hidden">답변 여부</dt>
                          <dd>미답변</dd>
                        </dl>

                        <div className="misc">
                          <strong>홍시*</strong>
                          <time datetime="2021-01-01 01:01">
                            2021년 1월 1일 01시 01분
                          </time>
                        </div>
                      </header>

                      <div className="inquiry-card-body">
                        <div className="inquiry-content">
                          <span aria-label="문의 내용">Q</span>
                          <p>
                            <i className="ic-lock" aria-hidden></i>
                            비밀글입니다.
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>

                  <!-- NOTE: 답변이 달린 경우 -->
                  <li className="inquiry-item">
                    <article className="inquiry-card">
                      <header className="inquiry-card-header">
                        <h3 className="visually-hidden">지* 님이 남기신 문의</h3>

                        <dl className="detail">
                          <dt className="visually-hidden">구매 여부</dt>
                          <dd>비구매</dd>
                          <dt className="visually-hidden">문의 유형</dt>
                          <dd>배송</dd>
                          <dt className="visually-hidden">답변 여부</dt>
                          <dd className="is-answered">답변완료</dd>
                        </dl>

                        <div className="misc">
                          <strong>샤*</strong>
                          <time datetime="2020-12-24 09:03">
                            2020년 12월 24일 09시 03분
                          </time>
                        </div>
                      </header>

                      <div className="inquiry-card-body">
                        <div className="inquiry-content">
                          <span aria-label="문의 내용">Q</span>
                          <p>
                            화이트 재입고 날짜 알려 주세요 그리고 4평 남짓 방에
                            두려고 하는데 너무 가까울까요
                          </p>
                        </div>

                        <div className="inquiry-content">
                          <span aria-label="답변 내용">A</span>
                          <div className="seller">
                            <strong>OA</strong>
                            <time datetime="2020-12-24 19:30">
                              2020년 12월 24일 19시 30분
                            </time>
                          </div>
                          <p>
                            안녕하세요 고객님, 보아르입니다:)<br />
                            현재 고객님의 주문 정보가 확인되지 않아 바로
                            안내드리지 못하는 점 양해 부탁드립니다.<br />
                            문의하신 제품의 경우 현재 주문폭주로 인한 예약
                            판매중으로 순차 발송 진행되고 있습니다.<br />
                            주문 시 최대한 빠른 발송 진행될 수 있도록
                            노력하겠습니다.<br />
                            감사합니다.
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                </ol>

                <div className="pagination">
                  <ol className="page-list">
                    <li className="page-item is-active">
                      <a href="/">1</a>
                    </li>
                    <li className="page-item">
                      <a href="/">2</a>
                    </li>
                    <li className="page-item">
                      <a href="/">3</a>
                    </li>
                    <li className="page-item">
                      <a href="/">4</a>
                    </li>
                    <li className="page-item">
                      <a href="/">5</a>
                    </li>
                  </ol>
                  <button className="page-control page-next" type="button">
                    <i className="ic-chevron"></i>
                  </button>
                </div>
              </div>
            </section>
            <div className="product-section-divider sm-only" aria-hidden></div>

            <!-- NOTE: 문의가 0개일 경우 -->
            <!-- <section
              className="product-section product-inquiry is-open"
              id="product-inquiry"
              role="tabpanel"
            >
              <header className="product-section-header">
                <h1 className="title">문의</h1>
                <strong className="badge" aria-label="0개">0</strong>
                <a className="text-button" href="/">문의하기</a>
                <button
                  className="icon-button sm-only"
                  type="button"
                  aria-label="더보기"
                >
                  <i className="ic-chevron" aria-hidden></i>
                </button>
              </header>
              <div className="product-section-content">
                <p className="inquiry-empty">문의 내역이 없습니다.</p>
              </div>
            </section>
            <div className="product-section-divider sm-only" aria-hidden></div> -->

            <div className="product-shipment" id="product-shipment" role="tabpanel">
              <header className="product-section-header sm-only">
                <h1 className="title">배송/교환/환불</h1>

                <button className="icon-button" type="button" aria-label="더보기">
                  <i className="ic-chevron" aria-hidden></i>
                </button>
              </header>

              <section className="product-section">
                <header className="product-section-header">
                  <h1 className="title">배송</h1>
                </header>

                <div className="product-section-content">
                  <table className="product-table">
                    <tbody>
                      <tr>
                        <th scope="row">배송</th>
                        <td>일반택배</td>
                      </tr>
                      <tr>
                        <th scope="row">배송비</th>
                        <td>무료 배송</td>
                      </tr>
                      <tr>
                        <th scope="row">배송불가 지역</th>
                        <td>배송불가 지역이 없습니다</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div className="product-section-divider sm-only" aria-hidden></div>

              <section className="product-section">
                <header className="product-section-header">
                  <h1 className="title">교환/환불</h1>
                </header>

                <div className="product-section-content">
                  <table className="product-table">
                    <tbody>
                      <tr>
                        <th scope="row">반품배송비</th>
                        <td>
                          2,500원 (최초 배송비가 무료인 경우 5,000원 부과)
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">교환배송비</th>
                        <td>5,000원</td>
                      </tr>
                      <tr>
                        <th scope="row">보내실 곳</th>
                        <td>(00000) 서울 종로구 누하동</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div className="product-section-divider sm-only" aria-hidden></div>
            </div>

            <section
              className="product-section product-recommendation"
              id="product-recommendation"
              role="tabpanel"
            >
              <header className="product-section-header">
                <h1 className="title">비슷한 상품</h1>
              </header>

              <div className="product-section-content">
                <ul className="product-list">
                  <li className="product-item">
                    <a href="/">
                      <div className="product-card">
                        <div className="product-card-image">
                          <img
                            src="./assets/images/img-recommendation-01.jpg"
                            alt=""
                          />
                        </div>

                        <span className="product-card-brand">emk</span>
                        <h3 className="product-card-title">
                          시즌템! 감성 레트로 전기히터 EQH-S161 3 colors
                        </h3>

                        <div className="product-card-price">
                          <span className="percent">72%</span>
                          <strong className="price">49,000</strong>
                        </div>

                        <dl className="product-card-detail">
                          <div className="rating">
                            <dt>
                              <i className="ic-star"></i>
                              <span className="visually-hidden">평점</span>
                            </dt>
                            <dd>4.6</dd>
                          </div>

                          <div className="review">
                            <dt>리뷰</dt>
                            <dd>3,605</dd>
                          </div>
                        </dl>

                        <strong className="tag-gray">무료배송</strong>
                      </div>
                    </a>
                  </li>

                  <li className="product-item">
                    <a href="/">
                      <div className="product-card">
                        <div className="product-card-image">
                          <img
                            src="./assets/images/img-recommendation-03.jpg"
                            alt=""
                          />
                        </div>

                        <span className="product-card-brand">
                          플러스마이너스제로
                        </span>
                        <h3 className="product-card-title">
                          원적외선 2단 히터 XHS-Y010
                        </h3>

                        <div className="product-card-price">
                          <span className="percent">10%</span>
                          <strong className="price">88,200</strong>
                        </div>

                        <dl className="product-card-detail">
                          <div className="rating">
                            <dt>
                              <i className="ic-star"></i>
                              <span className="visually-hidden">평점</span>
                            </dt>
                            <dd>4.5</dd>
                          </div>

                          <div className="review">
                            <dt>리뷰</dt>
                            <dd>28</dd>
                          </div>
                        </dl>

                        <strong className="tag-gray">무료배송</strong>
                      </div>
                    </a>
                  </li>

                  <li className="product-item">
                    <a href="/">
                      <div className="product-card">
                        <div className="product-card-image">
                          <img
                            src="./assets/images/img-recommendation-02.jpg"
                            alt=""
                          />
                        </div>

                        <span className="product-card-brand">
                          플러스마이너스제로
                        </span>
                        <h3 className="product-card-title">
                          리플렉트 에코히터 4colors
                        </h3>

                        <div className="product-card-price">
                          <span className="percent">23%</span>
                          <strong className="price">129,000</strong>
                        </div>

                        <dl className="product-card-detail">
                          <div className="rating">
                            <dt>
                              <i className="ic-star"></i>
                              <span className="visually-hidden">평점</span>
                            </dt>
                            <dd>4.6</dd>
                          </div>

                          <div className="review">
                            <dt>리뷰</dt>
                            <dd>605</dd>
                          </div>
                        </dl>

                        <strong className="tag-gray">무료배송</strong>
                      </div>
                    </a>
                  </li>

                  <li className="product-item">
                    <a href="/">
                      <div className="product-card">
                        <div className="product-card-image">
                          <img
                            src="./assets/images/img-recommendation-04.jpg"
                            alt=""
                          />
                        </div>

                        <span className="product-card-brand"> 코시나 </span>
                        <h3 className="product-card-title">
                          오방난로 히터 6종 모음전
                        </h3>

                        <div className="product-card-price">
                          <span className="percent">52%</span>
                          <strong className="price">56,900</strong>
                        </div>

                        <dl className="product-card-detail">
                          <div className="rating">
                            <dt>
                              <i className="ic-star"></i>
                              <span className="visually-hidden">평점</span>
                            </dt>
                            <dd>4.6</dd>
                          </div>

                          <div className="review">
                            <dt>리뷰</dt>
                            <dd>250</dd>
                          </div>
                        </dl>

                        <strong className="tag-gray">무료배송</strong>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <div className="product-section-divider sm-only" aria-hidden></div>
          </div>

          <div className="col-lg-4 lg-only">
            <form
              className="floating-order-form order-form"
              action="/"
              method="POST"
            >
              <div className="order-inputs">
                <div className="select-group is-active">
                  <select
                    className="form-select"
                    id="floating-order-form-select-1"
                    required
                  >
                    <option value="">선택</option>
                    <option value="1">선택사항 1</option>
                    <option value="2">선택사항 2</option>
                    <option value="3">선택사항 3</option>
                    <option value="4">선택사항 4</option>
                    <option value="5">선택사항 5</option>
                  </select>
                  <i className="ic-caret" aria-hidden></i>
                </div>
                <div className="select-group">
                  <select className="form-select" id="floating-order-form-select-2">
                    <option value="">추가상품 (선택)</option>
                    <option value="1">선택사항 1</option>
                    <option value="2">선택사항 2</option>
                    <option value="3">선택사항 3</option>
                    <option value="4">선택사항 4</option>
                    <option value="5">선택사항 5</option>
                  </select>
                  <i className="ic-caret" aria-hidden></i>
                </div>
              </div>

              <div className="order-checkouts">
                <ul className="checkout-list">
                  <li className="checkout-item">
                    <div className="checkout-card">
                      <header className="checkout-header">
                        <h4 className="checkout-title">화이트</h4>
                        <button
                          className="delete-button"
                          type="button"
                          aria-label="해당 상품을 삭제하기"
                        >
                          <i className="ic-close" aria-hidden></i>
                        </button>
                      </header>

                      <footer className="checkout-footer">
                        <div className="checkout-select">
                          <select id="floating-order-form-checkout-item-1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <i className="ic-caret" aria-hidden></i>
                        </div>

                        <output
                          className="checkout-output"
                          for="floating-order-form-checkout-item-1"
                        >
                          <div className="price-16">
                            <strong className="amount">32,900</strong>
                            <span className="currency">원</span>
                          </div>
                        </output>
                      </footer>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="checkout-card">
                      <header className="checkout-header">
                        <h4 className="checkout-title">
                          추가상품 - 귤무덤 패키지 / 제주감귤 3kg / 온라인 감귤
                          판매 1위
                        </h4>
                        <button
                          className="delete-button"
                          type="button"
                          aria-label="해당 상품을 삭제하기"
                        >
                          <i className="ic-close" aria-hidden></i>
                        </button>
                      </header>

                      <footer className="checkout-footer">
                        <div className="checkout-select">
                          <select id="floating-order-form-checkout-item-2">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <i className="ic-caret" aria-hidden></i>
                        </div>

                        <output
                          className="checkout-output"
                          for="floating-order-form-checkout-item-2"
                        >
                          <div className="price-16">
                            <strong className="amount">30,000</strong>
                            <span className="currency">원</span>
                          </div>
                        </output>
                      </footer>
                    </div>
                  </li>
                </ul>
              </div>

              <dl className="order-summary">
                <dt>주문금액</dt>
                <dd>
                  <output
                    for="floating-order-form-select-1 floating-order-form-select-2"
                  >
                    <div className="price-20">
                      <strong className="amount">62,900</strong>
                      <span className="currency">원</span>
                    </div>
                  </output>
                </dd>
              </dl>

              <div className="button-group">
                <button
                  className="bookmark-button btn-55"
                  type="button"
                  aria-label="북마크에 추가"
                >
                  <i className="ic-bookmark" aria-hidden></i>
                </button>
                <!-- <button
                  className="bookmark-button is-active btn-55"
                  type="button"
                  aria-label="북마크에 해제"
                >
                  <i className="ic-bookmark-filled" aria-hidden></i>
                </button> -->
                <button className="btn-outlined btn-55" type="button">
                  장바구니
                </button>
                <button className="btn-primary btn-55" type="submit">
                  바로구매
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="order-cta lg-hidden">
        <!-- NOTE: 북마크를 하지 않았을 때 -->
        <button className="btn-ghost btn-48" type="button">
          <i className="ic-bookmark" aria-hidden></i>
          <span aria-label="북마크 18,302회">18,302</span>
        </button>

        <!-- NOTE: 북마크를 했을 때 -->
        <!-- <button className="btn-ghost btn-48 is-active" type="button">
          <i className="ic-bookmark-filled" aria-hidden></i>
          <span aria-label="북마크 18,303회">18,303</span>
        </button> -->
        <button className="btn-primary btn-48" type="button">구매하기</button> */}
      </div>
    </main>
  )
}

export default ProductShow
