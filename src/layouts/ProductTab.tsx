import './ProductTab.scss'

function ProductTab() {
  return (
    <div className="ProductTab">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            <ul className="ProductTab-list" role="tablist">
              <li
                className="ProductTab-item"
                role="tab"
                aria-labelledby="product-spec"
              >
                <button type="button">상품정보</button>
              </li>
              <li
                className="ProductTab-item"
                role="tab"
                aria-labelledby="product-review"
              >
                <button type="button">
                  리뷰
                  <strong className="badge" aria-label="566개 리뷰">
                    566
                  </strong>
                </button>
              </li>
              <li
                className="ProductTab-item"
                role="tab"
                aria-labelledby="product-inquiry"
              >
                <button type="button">
                  문의
                  <strong className="badge" aria-label="96개 문의">
                    96
                  </strong>
                </button>
              </li>
              <li
                className="ProductTab-item"
                role="tab"
                aria-labelledby="product-shipment"
              >
                <button type="button">배송/환불</button>
              </li>
              <li
                className="ProductTab-item"
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
  )
}

export default ProductTab
