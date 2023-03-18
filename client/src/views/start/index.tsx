import { useNavigate } from "react-router-dom"

const Menu = () => {
  const navigate = useNavigate()
  return <div>
    <button onClick={() => navigate('/menu')}>Start</button>
  </div>
}

export default Menu