import { useNavigate } from "react-router-dom"

import Button from "../../components/button"
import Container from "./components/container"

const Start = () => {
  const navigate = useNavigate()
  return <Container>
    <h3>LOGO</h3>
    <Button onClick={() => navigate('/menu')} size="large">Start</Button>
  </Container>
}

export default Start