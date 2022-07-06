import './SearchHistory.scss'

interface SearchHistoryProps {
  searchHistoryitems: string[]
  setSearchHistoryitems: React.Dispatch<React.SetStateAction<string[]>>
  isActiveSearchHistory?: boolean
}

interface DeleteSearchHistoryItem {
  (id: number): void
}

function SearchHistory({
  searchHistoryitems,
  setSearchHistoryitems,
  isActiveSearchHistory,
}: SearchHistoryProps) {
  const deleteAllSearchHistoryItems = () => {
    setSearchHistoryitems([])
  }
  const deleteSearchHistoryItem: DeleteSearchHistoryItem = (id) => {
    const copySearchHistoryitems = [...searchHistoryitems]
    copySearchHistoryitems.splice(id, 1)
    setSearchHistoryitems(copySearchHistoryitems)
  }

  const isActive = isActiveSearchHistory ? 'is-active' : ''

  const empty = <p className="placeholder">최근 검색한 내역이 없습니다.</p>

  const noEmpty = searchHistoryitems.map((item, idx) => {
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
  })

  const item = searchHistoryitems.length === 0 ? empty : noEmpty

  return (
    <section className={`SearchHistory ${isActive}`}>
      <header className="SearchHistory-header">
        <h2 className="title">최근 검색어</h2>
        <button type="button" onClick={deleteAllSearchHistoryItems}>
          전체 삭제
        </button>
      </header>

      <div className="SearchHistory-content">
        <ol className="SearchHistory-list">{item}</ol>
      </div>
    </section>
  )
}

export default SearchHistory
