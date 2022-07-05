interface LocalNavProps {
  classNameTitle: string
  localNavItems: string[]
}

function LocalNav({ classNameTitle, localNavItems }: LocalNavProps) {
  return (
    <ul className={`${classNameTitle}-list`}>
      {localNavItems.map((item, idx) => {
        /* NOTE: '스토어' is-active 설정 */
        const isActive = item === '스토어' ? 'is-active' : ''
        /* NOTE: '기획전' New Icon 적용 */
        const isNew = item === '기획전' && (
          <i className="ic-new" lang="en" aria-label="New"></i>
        )
        return (
          <li className={`${classNameTitle}-item ${isActive}`} key={idx}>
            <a href="/">
              {item}
              {isNew}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default LocalNav
