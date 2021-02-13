import styled from 'styled-components'
import logo from '../../assets/logo.png'

const HeaderBase = styled.header`
    width: 100vw;
    text-align: center;
    display: block;
`;

HeaderBase.Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.backgroundHeader};
`;

HeaderBase.Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

HeaderBase.Image = styled.img`
    width: 4rem;
    height: 4rem;
`;

HeaderBase.Title = styled.a`
    padding: 2rem;
    font-size: 2rem;
    font-family: 'Courgette', cursive;
    color: ${({ theme }) => theme.colors.text};
`;

HeaderBase.Nav = styled.nav`
    background-color: ${({ theme }) => theme.colors.backgroundHeader};
    text-align: center;
`;

HeaderBase.Menu = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

HeaderBase.Item = styled.li`
    @media screen and (min-width: 48.75em){
        display: inline-block;
    }
`;

HeaderBase.Link = styled.a`
    color: white;
    text-decoration: none;
    padding: 1em;
    display: block;
    &:hover, &:active{
        background-color: ${({ theme }) => theme.colors.secondary}
    }
`;

export default function Header() {
    return (
        <HeaderBase>
            <HeaderBase.Container>
                <HeaderBase.Logo>
                    <HeaderBase.Image src={logo} />
                    <HeaderBase.Title>
                        Iara Hospedagem
                    </HeaderBase.Title>
                </HeaderBase.Logo>
                <HeaderBase.Nav>
                    <HeaderBase.Menu>
                        <HeaderBase.Item>
                            <HeaderBase.Link href="#">
                                Home
                            </HeaderBase.Link>
                        </HeaderBase.Item>
                        <HeaderBase.Item>
                            <HeaderBase.Link href="#">
                                Produtos
                            </HeaderBase.Link>
                        </HeaderBase.Item>
                        <HeaderBase.Item>
                            <HeaderBase.Link href="#">
                                Serviços
                            </HeaderBase.Link>
                        </HeaderBase.Item>
                        <HeaderBase.Item>
                            <HeaderBase.Link href="#">
                                Contato
                            </HeaderBase.Link>
                        </HeaderBase.Item>
                    </HeaderBase.Menu>
                </HeaderBase.Nav>
            </HeaderBase.Container>
        </HeaderBase>
    )
}