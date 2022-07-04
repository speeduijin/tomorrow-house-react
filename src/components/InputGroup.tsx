import { useState } from 'react'

interface Props {
  searchHistoryitems: string[]
  setSearchHistoryitems: React.Dispatch<React.SetStateAction<string[]>>
  onFocus?: () => void
}

interface ChangeSearchTextFunc {
  (event: React.ChangeEvent<HTMLInputElement>): void
}
interface AddSearchHistoryitemFunc {
  (item: string): void
}

function InputGroup({
  searchHistoryitems,
  setSearchHistoryitems,
  onFocus,
}: Props) {
  const [searchText, setSearchText] = useState('')

  const ChangeSearchText: ChangeSearchTextFunc = (event) => {
    setSearchText(event.target.value)
  }

  const addSearchHistoryitem: AddSearchHistoryitemFunc = (item) => {
    setSearchHistoryitems([item, ...searchHistoryitems])
  }

  const pressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' && searchText.length > 0) {
      addSearchHistoryitem(searchText)

      setSearchText('')
    }
  }

  return (
    <div className="input-group">
      <i className="ic-search" aria-hidden></i>
      <input
        className="form-input"
        type="text"
        placeholder="스토어 검색"
        onFocus={onFocus}
        onChange={ChangeSearchText}
        value={searchText}
        onKeyPress={pressEnter}
      />
    </div>
  )
}

export default InputGroup
