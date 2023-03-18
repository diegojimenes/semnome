// import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/button"

const Menu = () => {
  const navigate = useNavigate()
  // let { id } = useParams()

  return <div>
    <Button onClick={() => navigate('/')} size="large">finish session</Button>
  </div>
}

export default Menu