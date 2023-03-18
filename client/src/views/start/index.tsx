import { useNavigate } from "react-router-dom"

import Button from "../../components/button"

const Start = () => {
  const navigate = useNavigate()
  return <div>
    <Button onClick={() => navigate('/menu')} size="large">Start</Button>
  </div>
}

export default Start