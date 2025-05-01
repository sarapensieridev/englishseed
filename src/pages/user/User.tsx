import Single from '../../components/single/Single'
import { singleUser } from '../../data'
import './user.scss'

const User = () => {

    //Fetch data and send it to a single Component

  return (
    <div className='user'>
      <Single {...singleUser}/>
    </div>
  )
}

export default User
