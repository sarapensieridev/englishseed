import Single from '../../components/single/Single'
import { singleOrder } from '../../data'
import './order.scss'

const order = () => {
  return (
    <div className='order'>
      <Single {...singleOrder}/>
      
    </div>
  )
}

export default order
