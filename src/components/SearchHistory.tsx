import './SearchHistory.scss'

interface SearchHistoryProps {
  searchHistoryitems: string[]
  isActiveSearchHistory: boolean
  deleteAllSearchHistoryItems: () => void
  deleteSearchHistoryItem: (key: number) => void
}

function SearchHistory(props: SearchHistoryProps) {
  return (
    <section
      className={`SearchHistory ${
        props.isActiveSearchHistory ? 'is-active' : ''
      }`}
    >
      <header className="SearchHistory-header">
        <h2 className="title">최근 검색어</h2>
        <button type="button" onClick={props.deleteAllSearchHistoryItems}>
          전체 삭제
        </button>
      </header>

      <div className="SearchHistory-content ">
        <ol className="SearchHistory-list">
          {props.searchHistoryitems.map((item, idx) => {
            return (
              <li className="SearchHistory-item" key={idx}>
                <button className="word-button" type="button">
                  {item}
                </button>
                <button
                  className="delete-button"
                  type="button"
                  aria-label="검색어 삭제"
                  onClick={() => {
                    props.deleteSearchHistoryItem(idx)
                  }}
                >
                  <i className="ic-close"></i>
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default SearchHistory
