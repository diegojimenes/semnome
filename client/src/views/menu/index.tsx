import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Menu = () => {
  const navigate = useNavigate()
  let { id } = useParams()

  useEffect(() => {
    console.log(id)
  }, [])

  return <div>
    <button onClick={() => navigate('/')}>click</button>
  </div>
}

export default Menu