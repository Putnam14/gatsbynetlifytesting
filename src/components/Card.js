import styled from 'styled-components'

const Card = styled.div`
  z-index: 1;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: ${props => props.theme.light};
  border-radius: 10px;
  box-shadow: ${props => props.theme.bs};
`

export default Card
