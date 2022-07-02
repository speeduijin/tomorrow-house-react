// import React, { useState, useEffect, useRef } from 'react'
import GnbIconButton from './GnbIconButton'
import Mymenu from '../components/Mymenu'
// import SearchHistory from '../components/SearchHistory'

// interface DeleteSearchHistoryItem {
//   (key: number): void
// }

function GnbRight() {
  // const searchHistoryitemsInit = ['김버그', '버그', '튕김버그']
  // const [searchHistoryitems, setSearchHistoryitems] = useState<string[]>(
  //   searchHistoryitemsInit
  // )

  // const [searchValue, setSearchValue] = useState('')

  // const [isActiveSearchHistory, setIsActiveSearchHistory] = useState(false)

  // const gnbSearchRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const closeSearchHistoryOnClickingOutside = (event: MouseEvent) => {
  //     gnbSearchRef.current &&
  //       !gnbSearchRef.current.contains(event.target as Node) &&
  //       setIsActiveSearchHistory(false)
  //   }

  //   document.addEventListener('mousedown', closeSearchHistoryOnClickingOutside)
  //   return () => {
  //     document.removeEventListener(
  //       'mousedown',
  //       closeSearchHistoryOnClickingOutside
  //     )
  //   }
  // }, [gnbSearchRef])

  // const openSearchHistory = () => {
  //   searchHistoryitems.length !== 0 && setIsActiveSearchHistory(true)
  // }

  // const deleteAllSearchHistoryItems = () => {
  //   const copySearchHistoryitems = [...searchHistoryitems]
  //   copySearchHistoryitems.length = 0
  //   setSearchHistoryitems(copySearchHistoryitems)

  //   setIsActiveSearchHistory(false)
  // }

  // const deleteSearchHistoryItem: DeleteSearchHistoryItem = (key) => {
  //   const copySearchHistoryitems = [...searchHistoryitems]
  //   copySearchHistoryitems.splice(key, 1)
  //   copySearchHistoryitems.length === 0 && setIsActiveSearchHistory(false)

  //   setSearchHistoryitems(copySearchHistoryitems)
  // }
  return (
    <div className="GnbRight">
      <div
        className="Gnb-search lg-only"
        //  ref={gnbSearchRef}
      >
        <div className="input-group">
          <i className="ic-search" aria-hidden></i>
          <input
            className="form-input"
            type="text"
            placeholder="스토어 검색"
            // value={searchValue}
            // onFocus={openSearchHistory}
            // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            //   setSearchValue(event.target.value)
            // }
            // onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            //   if (event.code === 'Enter') {
            //     setSearchHistoryitems.length === 1 &&
            //       setIsActiveSearchHistory(true)

            //     setSearchHistoryitems([searchValue, ...searchHistoryitems])
            //     setSearchValue('')
            //   }
            // }}
          />
        </div>

        {/* <SearchHistory
            searchHistoryitems={searchHistoryitems}
            isActiveSearchHistory={isActiveSearchHistory}
            deleteAllSearchHistoryItems={deleteAllSearchHistoryItems}
            deleteSearchHistoryItem={deleteSearchHistoryItem}
          /> */}
      </div>

      {/* NOTE: 로그인을 한 경우   */}
      <div className="button-group">
        <GnbIconButton
          className="is-search lg-hidden"
          ariaLabel="검색창 열기 버튼"
          iClassName="ic-search"
        />

        <GnbIconButton
          className="sm-hidden"
          ariaLabel="스크랩북 페이지로 이동"
          iClassName="ic-bookmark"
        />

        <GnbIconButton
          className="sm-hidden"
          ariaLabel="내 소식 페이지로 이동"
          iClassName="ic-bell"
        />

        <GnbIconButton
          className="is-cart"
          ariaLabel="장바구니 페이지로 이동"
          iClassName="ic-cart"
        />

        <Mymenu />
      </div>

      {/* NOTE: 로그인을 하지 않은 경우  */}
      {/* <div className="button-group">
          <button
            className="Gnb-icon-button is-search lg-hidden"
            type="button"
            aria-label="검색창 열기 버튼"
          >
            <i className="ic-search"></i>
          </button>
          <a
            className="Gnb-icon-button is-cart"
            href="/"
            aria-label="장바구니 페이지로 이동"
          >
            <i className="ic-cart"></i>
          </a>
          <div className="Gnb-auth sm-hidden">
            <a href="/">로그인</a>
            <a href="/">회원가입</a>
          </div>
        </div> */}

      <button className="btn-primary btn-40 sm-hidden" type="button">
        글쓰기
        <i className="ic-chevron" aria-hidden></i>
      </button>
    </div>
  )
}

export default GnbRight
