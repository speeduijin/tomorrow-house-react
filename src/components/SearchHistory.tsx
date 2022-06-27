import './SearchHistory.scss'

function SearchHistory() {
  return (
    <section className="SearchHistory">
      <header className="SearchHistory-header">
        <h2 className="title">최근 검색어</h2>
        <button type="button">전체 삭제</button>
      </header>

      <div className="SearchHistory-content">
        <ol className="SearchHistory-list">
          <li className="SearchHistory-item">
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
          <li className="SearchHistory-item">
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
          <li className="SearchHistory-item">
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
  )
}

export default SearchHistory
