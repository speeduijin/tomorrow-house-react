import './ProductInfo.scss'

function ProductInfo() {
  const activeStar = []
  for (let i = 0; i < 5; i++) {
    activeStar.push(<i className="ic-star is-active" key={i}></i>)
  }
  return (
    <section className="ProductInfo">
      <header className="ProductInfo-header">
        <a className="info-brand" href="/">
          보아르
        </a>
        <h1 className="info-title">
          캠핑/가정용 400W 미니멀 전기히터 VO-HT015 (안전장치기능탑재)
        </h1>

        <div className="info-review">
          <div className="star-rating">{activeStar}</div>

          <p>
            <strong>566</strong>
            <span className="sm-hidden">개 리뷰</span>
          </p>
        </div>
      </header>

      <div className="ProductInfo-price sm-only">
        <div className="info-original-price">
          <div className="discount-rate">
            <span className="rate">34</span>
            <span className="percent">%</span>
          </div>

          <div className="price-off">
            <strong className="amount">49,900</strong>
            <span className="currency sm-hidden">원</span>
          </div>
        </div>

        <div className="info-sale-price">
          <div className="price-20">
            {/*다른점 */}
            <strong className="amount">32,900</strong>
            <span className="currency">원</span>
          </div>

          <strong className="tag-red"> 특가 </strong>
        </div>

        <p className="info-point">
          <strong aria-label="987 포인트">987P</strong>
          적립해드립니다. (VIP 3배 혜택 적용됨)
        </p>
      </div>

      {/* NOTE: 모바일용 가격 */}
      <div className="ProductInfo-price sm-only">
        <div className="info-original-price">
          <div className="discount-rate">
            <span className="rate">34</span>
            <span className="percent">%</span>
          </div>

          <div className="price-off">
            <strong className="amount">49,900</strong>
            <span className="currency sm-hidden">원</span>
          </div>
        </div>

        <div className="info-sale-price">
          <div className="price-20">
            <strong className="amount">32,900</strong>
            <span className="currency">원</span>
          </div>

          <strong className="tag-red"> 특가 </strong>
        </div>

        <p className="info-point">
          <strong aria-label="987 포인트">987P</strong>
          적립해드립니다. (VIP 3배 혜택 적용됨)
        </p>
      </div>

      {/* NOTE: 태블릿 이후 가격 */}
      <div className="ProductInfo-price sm-hidden">
        <div className="info-price-wrapper">
          <div className="discount-rate">
            <span className="rate">34</span>
            <span className="percent">%</span>
          </div>

          <div className="info-price">
            <div className="price-off">
              <strong className="amount">49,900</strong>
              <span className="currency">원</span>
            </div>

            <div className="info-sale-price">
              <div className="price-32">
                <strong className="amount">32,900</strong>
                <span className="currency">원</span>
              </div>

              <strong className="tag-red"> 특가 </strong>
            </div>
          </div>
        </div>

        <p className="info-point">
          <strong aria-label="987 포인트">987P</strong>
          적립해드립니다. (VIP 3배 혜택 적용됨)
        </p>
      </div>

      <div className="ProductInfo-delivery">
        <span>일반택배</span>
        <strong className="tag-gray"> 무료배송 </strong>
      </div>
    </section>
  )
}

export default ProductInfo
