import ImgProduct01 from '../assets/images/img-product-01.jpg'
import ImgProduct02 from '../assets/images/img-product-02.jpg'
import ImgProduct03 from '../assets/images/img-product-03.jpg'
import ImgProduct04 from '../assets/images/img-product-04.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import './ProductCarousel.scss'

function ProductCarousel() {
  const items = [
    { id: 1, src: ImgProduct01 },
    { id: 2, src: ImgProduct02 },
    { id: 3, src: ImgProduct03 },
    { id: 4, src: ImgProduct04 },
  ]

  const settings = {
    customPaging: function (i: number) {
      const id = items[i].id
      const src = items[i].src
      return (
        <button>
          <img src={src} alt={`${id}번 이미지`} />
        </button>
      )
    },
    arrows: false,
    autoplay: true,
    infinite: true,
    dots: true,
    dotsClass: 'thumbnail-list',
  }

  return (
    <div className="ProductCarousel">
      <Slider {...settings}>
        {items.map((item) => {
          return (
            <div
              className="slider-item"
              role="tabpanel"
              aria-labelledby={`ProductCarousel-tab-${item.id}`}
              key={item.id}
            >
              <figure>
                <img src={item.src} alt="" />
                <figcaption className="visually-hidden">
                  {`보아르 전기히터 상세 이미지 ${item.id}`}
                </figcaption>
              </figure>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default ProductCarousel
