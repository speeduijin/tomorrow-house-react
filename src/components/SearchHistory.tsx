import './SearchHistory.scss'

interface SearchHistoryProps {
  isActiveSearchHistory?: boolean
  searchHistoryitems: string[]
  setSearchHistoryitems: React.Dispatch<React.SetStateAction<string[]>>
}

interface DeleteSearchHistoryItem {
  (id: number): void
}

function SearchHistory({
  isActiveSearchHistory,
  searchHistoryitems,
  setSearchHistoryitems,
}: SearchHistoryProps) {
  const isActive = isActiveSearchHistory ? 'is-active' : ''

  const deleteAllSearchHistoryItems = () => {
    setSearchHistoryitems([])
  }
  const deleteSearchHistoryItem: DeleteSearchHistoryItem = (id) => {
    const copySearchHistoryitems = [...searchHistoryitems]
    copySearchHistoryitems.splice(id, 1)
    setSearchHistoryitems(copySearchHistoryitems)
  }

  function SearchHistoryList() {
    return (
      <ol className="SearchHistory-list">
        {searchHistoryitems.map((item, idx) => {
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
                  deleteSearchHistoryItem(idx)
                }}
              >
                <i className="ic-close"></i>
              </button>
            </li>
          )
        })}
      </ol>
    )
  }

  const isEmpty =
    searchHistoryitems.length === 0 ? (
      <p className="placeholder">최근 검색한 내역이 없습니다.</p>
    ) : (
      <SearchHistoryList />
    )

  if (isActiveSearchHistory === true && searchHistoryitems.length === 0) {
    return null
  }
  return (
    <section className={`SearchHistory ${isActive}`}>
      <header className="SearchHistory-header">
        <h2 className="title">최근 검색어</h2>
        <button type="button" onClick={deleteAllSearchHistoryItems}>
          전체 삭제
        </button>
      </header>

      <div className="SearchHistory-content">{isEmpty}</div>
    </section>
  )
}

export default SearchHistory
