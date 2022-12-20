import BreadCrumb from '../components/BreadCrumb'
import ProductCarousel from '../components/ProductCarousel'
import ProductInfo from '../components/ProductInfo'
import OrderForm from '../components/OrderForm'
// import ProductUserGallery from '../components/ProductUserGallery'
import ProductSectionDivider from '../components/ProductSectionDivider'
// import ProductSpec from '../components/ProductSpec'
// import ProductInquiry from '../components/ProductInquiry'
import ProductTab from './ProductTab'

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

            {/* 수정필!!!!!! */}
            <OrderForm />
          </div>
        </div>

        <div className="row sm-only">
          <div className="col-sm-4">
            <ProductSectionDivider />
            {/* <ProductUserGallery /> */}
            <ProductSectionDivider addClassName="is-big" />
          </div>
        </div>
      </div>

      <ProductTab />

      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            {/* <section className="product-section product-user-gallery sm-hidden">
              <header className="product-section-header">
                <h1 className="title">유저들의 스타일링샷</h1>
                <strong className="badge" aria-label="461개">
                  461
                </strong>

                <a
                  className="icon-button is-right"
                  href="/"
                  aria-label="더보기"
                >
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
                            <a className="username" href="/">
                              김버그
                            </a>
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
                            <a className="username" href="/">
                              샤먼
                            </a>
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
                            <a className="username" href="/">
                              마샬
                            </a>
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
                            <a className="username" href="/">
                              사달라
                            </a>
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
                            <a className="username" href="/">
                              초코송이
                            </a>
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
            </section> */}
            {/* <ProductSpec /> */}
            {/* <ProductSectionDivider addClassName="sm-only" /> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductShow
