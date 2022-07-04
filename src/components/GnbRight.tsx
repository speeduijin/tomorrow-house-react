import { useState, useEffect, useRef } from 'react'
import InputGroup from './InputGroup'
import SearchHistory from '../components/SearchHistory'
import GnbIconButton from './GnbIconButton'
import Mymenu from './MyMenu'

interface GnbRightProps {
  searchHistoryitems: string[]
  setSearchHistoryitems: React.Dispatch<React.SetStateAction<string[]>>
  openSearchModal?: () => void
}

interface gnbIconButtonItems {
  className: string
  ariaLabel: string
  iClassName: string
  type?: 'button'
}

function GnbRight({
  searchHistoryitems,
  setSearchHistoryitems,
  openSearchModal,
}: GnbRightProps) {
  const gnbIconButtonItems: gnbIconButtonItems[] = [
    {
      className: 'is-search lg-hidden',
      ariaLabel: '검색창 열기 버튼',
      iClassName: 'ic-search',
      type: 'button',
    },
    {
      className: 'sm-hidden',
      ariaLabel: '스크랩북 페이지로 이동',
      iClassName: 'ic-bookmark',
    },
    {
      className: 'sm-hidden',
      ariaLabel: '내 소식 페이지로 이동',
      iClassName: 'ic-bell',
    },
    {
      className: 'is-cart',
      ariaLabel: '장바구니 페이지로 이동',
      iClassName: 'ic-cart',
    },
  ]

  const [isActiveSearchHistory, setIsActiveSearchHistory] = useState(false)
  const gnbSearchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeSearchHistoryOnClickingOutside = (event: MouseEvent) => {
      gnbSearchRef.current &&
        !gnbSearchRef.current.contains(event.target as Node) &&
        setIsActiveSearchHistory(false)
    }

    document.addEventListener('mousedown', closeSearchHistoryOnClickingOutside)
    return () => {
      document.removeEventListener(
        'mousedown',
        closeSearchHistoryOnClickingOutside
      )
    }
  }, [gnbSearchRef])

  const openSearchHistory = () => {
    setIsActiveSearchHistory(true)
  }

  const buttonItems = gnbIconButtonItems.map((item, idx) => {
    const gnbIconButtonType = item.type === 'button' ? item.type : undefined
    const gnbIconButtonOnClick =
      item.iClassName === 'ic-search' ? openSearchModal : undefined

    return (
      <GnbIconButton
        className={item.className}
        ariaLabel={item.ariaLabel}
        iClassName={item.iClassName}
        type={gnbIconButtonType}
        onClick={gnbIconButtonOnClick}
        key={idx}
      />
    )
  })

  return (
    <div className="GnbRight">
      <div className="Gnb-search lg-only" ref={gnbSearchRef}>
        <InputGroup
          onFocus={openSearchHistory}
          searchHistoryitems={searchHistoryitems}
          setSearchHistoryitems={setSearchHistoryitems}
        />
        <SearchHistory
          isActiveSearchHistory={isActiveSearchHistory}
          searchHistoryitems={searchHistoryitems}
          setSearchHistoryitems={setSearchHistoryitems}
        />
      </div>

      {/* NOTE: 로그인을 한 경우   */}
      <div className="button-group">
        {buttonItems}

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
