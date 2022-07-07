import { useState } from 'react'
import GlobalHeader from './layouts/GlobalHeader'
import Gnb from './layouts/Gnb'
import GnbLeft from './layouts/GnbLeft'
import GnbRight from './layouts/GnbRight'
import Lnb from './layouts/Lnb'
import Sidebar from './layouts/Sidebar'
import SearchModal from './layouts/SearchModal'
import Overlay from './layouts/Overlay'

function App() {
  const navInfo = [
    {
      id: 0,
      globalNavItem: '커뮤니티',
      globalNavIClassName: 'ic-community',
      localNavItems: [
        '홈',
        '사진',
        '집들이',
        '노하우',
        '전문가집들이',
        '셀프가이드',
        '질문과 답변',
        '이벤트',
      ],
      drawerMenuClassName: 'is-community',
    },
    {
      id: 1,
      globalNavItem: '스토어',
      globalNavIClassName: 'ic-store',
      localNavItems: [
        '스토어',
        '카테고리',
        '신혼가구',
        '베스트',
        '오늘의딜',
        '연휴특가',
        '월동준비',
        '리퍼마켓',
        '기획전',
      ],
      drawerMenuClassName: 'is-store',
    },
    {
      id: 2,
      globalNavIClassName: 'ic-expert',
      globalNavItem: '인테리어시공',
      localNavItems: ['시공홈', '시공스토어'],
      drawerMenuClassName: 'is-expert',
    },
  ]

  const isActiveGnbNavInit: boolean[] = Array(navInfo.length).fill(false)
  /* NOTE: '스토어' is-active 설정 */
  isActiveGnbNavInit[1] = true
  const [isActiveGnbNavItem, setIsActiveGnbNavItem] = useState([
    ...isActiveGnbNavInit,
  ])

  const [isActiveSidebar, setIsActiveSidebar] = useState(false)

  const [isActiveSearchModal, setIsActiveSearchModal] = useState(false)

  const [searchHistoryitems, setSearchHistoryitems] = useState([
    '김버그',
    '버그',
    '튕김버그',
  ])

  return (
    <div className="App">
      <GlobalHeader>
        <Gnb>
          <GnbLeft
            navInfo={navInfo}
            isActiveGnbNavItem={isActiveGnbNavItem}
            setIsActiveGnbNavItem={setIsActiveGnbNavItem}
            setIsActiveSidebar={setIsActiveSidebar}
          />
          <GnbRight
            searchHistoryitems={searchHistoryitems}
            setSearchHistoryitems={setSearchHistoryitems}
            setIsActiveSearchModal={setIsActiveSearchModal}
          />
        </Gnb>

        <Lnb navInfo={navInfo} isActiveGnbNav={isActiveGnbNavItem} />
      </GlobalHeader>
      <Sidebar
        navInfo={navInfo}
        isActiveGnbNavItem={isActiveGnbNavItem}
        isActiveSidebar={isActiveSidebar}
      />
      <SearchModal
        isActiveSearchModal={isActiveSearchModal}
        setIsActiveSearchModal={setIsActiveSearchModal}
        searchHistoryitems={searchHistoryitems}
        setSearchHistoryitems={setSearchHistoryitems}
      />

      <Overlay
        isActiveSidebar={isActiveSidebar}
        setIsActiveSidebar={setIsActiveSidebar}
        isActiveSearchModal={isActiveSearchModal}
      />
    </div>
  )
}

export default App
