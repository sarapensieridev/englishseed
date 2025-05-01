import Single from '../../components/single/Single'
import { singleProduct } from '../../data'
import './product.scss'

const Product = () => {

  //Fetch data and send it to a single Component
  return (
    <div className='product'>
      <Single {...singleProduct}/>   
    </div>
  )
}

export default Product
