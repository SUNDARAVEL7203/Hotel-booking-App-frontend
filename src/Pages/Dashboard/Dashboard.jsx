


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth);



  return (
    <center>
   <h2> <b>Dashboard</b></h2>
    </center>
  )
}

export default Dashboard