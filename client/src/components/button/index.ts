import styled from 'styled-components'

const Button = styled.button<{ size: 'large' | 'small' | 'mid' }>`
  font-size: ${props => props.theme.typography.buttonText};
  text-align: center;
  width: ${props => props.theme.button.size[props.size].width};
  height: ${props => props.theme.button.size[props.size].height};
  color: ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.primary};
  border: ${props => props.theme.general.border} solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.general.borderRadius};
`

export default Button