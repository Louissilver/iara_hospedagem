import styled from 'styled-components'
import Header from '../src/components/Header'
import About from '../src/components/About'
import Head from '../src/components/Head'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <Head/>
      <Header />
      <About title="Cantinho aconchegante em Estância Velha">
        &emsp;A hospedagem da Dona Iara foi fundada em 1999, tendo como foco principal o aluguel de quartos para estudantes de curso técnico de curtimento de couro do SENAI de Estância Velha (RS). Hoje em dia, a hospedagem está de portas abertas para todos aqueles que precisarem de um lar, um lugar para viagens de trabalho, ou um cantinho para descansar das correrias da vida.
        Se você quiser conhecer melhor a cidade de Estância Velha e a Rota Romântica, a hospedagem da Iara é o lugar perfeito para você! Estamos te esperando.
    </About>
    </>
  )
}
