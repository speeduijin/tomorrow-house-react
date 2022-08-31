import BreadCrumb from '../components/BreadCrumb'
import ProductCarousel from '../components/ProductCarousel'
import ProductInfo from '../components/ProductInfo'
import OrderForm from '../components/OrderForm'
import ProductSectionDivider from '../components/ProductSectionDivider'

function ProductShow() {
  return (
    <main className="ProductShow">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <BreadCrumb />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-6 col-lg-7">
            <ProductCarousel />
          </div>

          <div className="col-sm-4 col-md-6 col-lg-5">
            <ProductInfo />

            {/* 수정필!!!!!! */}
            <OrderForm />
          </div>
        </div>

        <div className="row sm-only">
          <div className="col-sm-4">
            <ProductSectionDivider />
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur dolorem maiores doloribus ipsam iusto doloremque harum
              corrupti inventore labore? Ex natus earum magni, ipsum corrupti
              ratione ab repellendus facere ut.
            </div>
            <ProductSectionDivider addClassName="is-big" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductShow
