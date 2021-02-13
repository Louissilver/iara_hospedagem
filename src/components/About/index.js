import styled from 'styled-components'

const AboutBase = styled.section`
    width: 100vw;
    margin: 0 auto;
    text-align: justify;
    display: block;
`;

AboutBase.Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: .25rem;
    background-color: ${({ theme }) => theme.colors.backgroundContainer};
`;

AboutBase.Title = styled.h2`
    padding: 1rem 2rem;
    text-align: center;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.backgroundTitle};
`;

AboutBase.Text = styled.p`
    padding: 0 2rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.backgroundSubtitle};
`;

export default function About({title, children}) {
    return (
        <AboutBase>
            <AboutBase.Container>
                <AboutBase.Title>{title}</AboutBase.Title>
                <AboutBase.Text>{children}</AboutBase.Text>
            </AboutBase.Container>
        </AboutBase>
    )
}