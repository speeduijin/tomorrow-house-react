import InputGroup from '../components/InputGroup'
import SearchHistory from '../components/SearchHistory'
import './SearchModal.scss'

interface SearchModalProps {
  isActiveSearchModal: boolean
  setIsActiveSearchModal: React.Dispatch<React.SetStateAction<boolean>>
  searchHistoryitems: string[]
  setSearchHistoryitems: React.Dispatch<React.SetStateAction<string[]>>
  addSearchHistoryitem?: (value: string) => void
}

function SearchModal({
  isActiveSearchModal,
  setIsActiveSearchModal,
  searchHistoryitems,
  setSearchHistoryitems,
}: SearchModalProps) {
  const closeSearchModal = () => {
    setIsActiveSearchModal(false)
  }

  const isActive = isActiveSearchModal ? 'is-active' : ''

  return (
    <aside className={`SearchModal lg-hidden ${isActive}`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <header className="SearchModal-header">
              <h1 className="visually-hidden">검색창</h1>

              <div className="SearchModal-form">
                <InputGroup
                  searchHistoryitems={searchHistoryitems}
                  setSearchHistoryitems={setSearchHistoryitems}
                />
                <button
                  className="btn-ghost btn-40"
                  type="button"
                  onClick={closeSearchModal}
                >
                  취소
                </button>
              </div>
            </header>

            <SearchHistory
              searchHistoryitems={searchHistoryitems}
              setSearchHistoryitems={setSearchHistoryitems}
            />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SearchModal
