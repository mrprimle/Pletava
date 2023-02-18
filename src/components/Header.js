import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.png' alt='pletava' />
          <Button>Request Free Demo</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Your Sustainable Partner for Software Development Services</h1>

            <p>
              Pletava builds dedicated teams and software solutions that create
              an impact – for your business and the world. Leverage our European
              tech expertise and Nordic business values to scale up and
              innovate.
            </p>

            <Button bg='#ec4858' color='#fff'>
              Let's build
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
