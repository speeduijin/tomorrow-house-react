import CheckoutCard from './CheckoutCard'
import './OrderForm.scss'

function OrderForm() {
  return (
    <form className="OrderForm lg-only" action="/" method="POST">
      <div className="order-inputs">
        <div className="select-group is-active">
          <select className="form-select" id="select-1" required>
            <option value="">선택</option>
            <option value="1">그린</option>
            <option value="2">화이트</option>
          </select>
          <i className="ic-caret" aria-hidden></i>
        </div>
        <div className="select-group">
          <select className="form-select" id="select-2">
            <option value="">추가상품 (선택)</option>
            <option value="1">선택사항 1</option>
          </select>
          <i className="ic-caret" aria-hidden></i>
        </div>
      </div>

      <div className="order-checkouts">
        <ul className="checkout-list">
          <li className="checkout-item">
            <CheckoutCard item="화이트" price="32,900" />
          </li>
          <li className="checkout-item">
            <CheckoutCard
              item=" 추가상품 - 귤무덤 패키지 / 제주감귤 3kg / 온라인 감귤 판매 1위"
              price="30,000"
            />
          </li>
        </ul>
      </div>

      <dl className="order-summary">
        <dt>주문금액</dt>
        <dd>
          <output htmlFor="select-1 select-2">
            <div className="price-20">
              <strong className="amount">62,900</strong>
              <span className="currency">원</span>
            </div>
          </output>
        </dd>
      </dl>

      <div className="button-group">
        <button className="btn-outlined btn-55" type="button">
          장바구니
        </button>
        <button className="btn-primary btn-55" type="submit">
          바로구매
        </button>
      </div>
    </form>
  )
}

export default OrderForm
