interface LocalNavProps {
  classNameTitle: string
  localNavItems: string[]
}

function LocalNav({ classNameTitle, localNavItems }: LocalNavProps) {
  const items = localNavItems.map((item, idx) => {
    /* NOTE: '카테고리' is-active 설정 */
    const isActive = item === '카테고리' ? 'is-active' : ''

    /* NOTE: '기획전' New Icon 적용 */
    const New = item === '기획전' && (
      <i className="ic-new" lang="en" aria-label="New"></i>
    )

    return (
      <li className={`${classNameTitle}-item ${isActive}`} key={idx}>
        <a href="/">
          {item}

          {New}
        </a>
      </li>
    )
  })

  return <ul className={`${classNameTitle}-list`}>{items}</ul>
}

export default LocalNav
