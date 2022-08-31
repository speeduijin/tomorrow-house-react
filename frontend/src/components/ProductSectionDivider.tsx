import './ProductSectionDivider.scss'

interface ProductSectionDividerProps {
  addClassName?: string
}

function ProductSectionDivider({ addClassName }: ProductSectionDividerProps) {
  return (
    <div className={`ProductSectionDivider ${addClassName}`} aria-hidden></div>
  )
}

export default ProductSectionDivider
