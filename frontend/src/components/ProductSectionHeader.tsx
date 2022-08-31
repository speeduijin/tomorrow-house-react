import './ProductSectionHeader.scss'

function ProductSectionHeader() {
  return (
    <header className="ProductSectionHeader">
      <h1 className="title">유저들의 스타일링샷</h1>
      <strong className="badge" aria-label="461개">
        461
      </strong>

      <a className="icon-button is-right" href="/" aria-label="더보기">
        <i className="ic-chevron" aria-hidden></i>
      </a>
    </header>
  )
}

export default ProductSectionHeader
