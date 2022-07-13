import './CheckoutCard.scss'

interface CheckoutCardProps {
  item: string
  price: string
}

function CheckoutCard({ item, price }: CheckoutCardProps) {
  return (
    <div className="CheckoutCard">
      <header className="checkout-header">
        <h4 className="checkout-title">{item}</h4>
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
          <select id="checkout-item-1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <i className="ic-caret" aria-hidden></i>
        </div>

        <output className="checkout-output" htmlFor="checkout-item-1">
          <div className="price-16">
            <strong className="amount">{price}</strong>
            <span className="currency">원</span>
          </div>
        </output>
      </footer>
    </div>
  )
}

export default CheckoutCard
