import styled from "styled-components"
import { FaInstagram, FaFacebook, FaBandcamp, FaEnvelope } from "react-icons/fa"

const Icons = { FaInstagram, FaFacebook, FaBandcamp, FaEnvelope }

const StyledItem = styled.li`
    display: inline;
    font-size: 20px;
    &:not(:first-child) {
      margin-left: 8px;
      }
`
const StyledList = styled.ul`
      margin: auto;
      padding:0px;
`
const StyledLink = styled.a`
    color: black;
`
const StyledDiv = styled.div`
    text-align: center;
    margin: auto;
    width: 100%;
    padding: 20px 0;
`

const ProductSection = styled.div`
    text-align: center;
    margin: 30px 0;
    padding: 20px 0;
`

const ProductTitle = styled.h3`
    margin: 20px 0 10px 0;
    font-weight: bold;
`

const ProductDescription = styled.p`
    margin: 10px 0;
    line-height: 1.5;
`

const ProductImage = styled.img`
    display: block;
    margin: 20px auto;
    max-width: 90%;
    height: auto;
`

const ProductPrice = styled.h4`
    margin: 15px 0;
    font-size: 18px;
    font-weight: bold;
`

const ProductButton = styled.button`
    padding: 8px 16px;
    background-color: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    
    &:active {
        border-color: #808080 #ffffff #ffffff #808080;
    }
`

const Divider = styled.hr`
    margin: 30px 0;
    border: 0;
    border-top: 1px solid #808080;
`

function Merch({ content }) {
  const social = [
    {
      name: "FaBandcamp",
      link: "https://webroketheweather.bandcamp.com?campaign=website",
    },
    {
      name: "FaInstagram",
      link: "https://www.instagram.com/webroketheweather/",
    },
    {
      name: "FaFacebook",
      link: "https://facebook.com/webroketheweather",
    },
    {
      name: "FaEnvelope",
      link: "mailto:webroketheweather@gmail.com",
    },
  ]

  return (
    <div>
      <StyledDiv>
        <h2>we broke the weather</h2>
        <StyledList>
          {social.map((s, idx) => {
            const Icon = Icons[s.name]
            return (
              <StyledItem key={idx}>
                <StyledLink href={s.link} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </StyledLink>
              </StyledItem>
            )
          })}
        </StyledList>
      </StyledDiv>

      <Divider />

      <ProductSection>
        <ProductTitle>restart game vinyl</ProductTitle>
        <ProductDescription>12" vinyl record - limited edition pressing (ox blood)</ProductDescription>

        <a href="https://webroketheweather.bandcamp.com/album/restart-game" target="_blank" rel="noopener noreferrer">
          <ProductImage src="/vinyl.jpg" alt="restart-game-vinyl" />
        </a>
        <ProductPrice>$25</ProductPrice>
        <p>
          <a href="https://webroketheweather.bandcamp.com/album/restart-game" target="_blank" rel="noopener noreferrer">
            <ProductButton>order on bandcamp</ProductButton>
          </a>
        </p>
      </ProductSection>

      <Divider />

      <ProductSection>
        <ProductTitle>black hole cactus t-shirt</ProductTitle>
        <ProductDescription>premium comfort tee with a black hole and a cactus</ProductDescription>
        <a
          href="https://webroketheweather.bandcamp.com/merch/black-hole-cactus-t-shirt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProductImage src="/cactus_tee.jpg" alt="black-hole-cactus-tshirt" />
        </a>
        <ProductPrice>$20</ProductPrice>
        <p>
          <a
            href="https://webroketheweather.bandcamp.com/merch/black-hole-cactus-t-shirt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProductButton>order on bandcamp</ProductButton>
          </a>
        </p>
      </ProductSection>

      <Divider />

      <ProductSection>
        <ProductTitle>restart game cd</ProductTitle>
        <ProductDescription>CD comes in 100% plastic-free eco wallet gatefold</ProductDescription>

        <a href="https://webroketheweather.bandcamp.com/album/restart-game" target="_blank" rel="noopener noreferrer">
          <ProductImage src="/rg-cd.jpg" alt="restart-game-cd" />
        </a>
        <ProductPrice>$10</ProductPrice>
        <p>
          <a href="https://webroketheweather.bandcamp.com/album/restart-game" target="_blank" rel="noopener noreferrer">
            <ProductButton>order on bandcamp</ProductButton>
          </a>
        </p>
      </ProductSection>

      <Divider />

      <ProductSection>
        <ProductTitle>rot king t-shirt</ProductTitle>
        <ProductDescription>wish your friends said "hey, cool tshirt" more often? try this one.</ProductDescription>
        <a
          href="https://webroketheweather.bandcamp.com/merch/rot-king-t-shirt?campaign=website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProductImage src="/t-shirt.jpg" alt="wbtw-tshirt" />
        </a>
        <ProductPrice>$20</ProductPrice>
        <p>
          <a
            href="https://webroketheweather.bandcamp.com/merch/rot-king-t-shirt?campaign=website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProductButton>order on bandcamp</ProductButton>
          </a>
        </p>
      </ProductSection>

      <Divider />

      <ProductSection>
        <ProductTitle>sticker pack</ProductTitle>
        <ProductDescription>grab some stickers for your stickerless surfaces</ProductDescription>
        <a
          href="https://webroketheweather.bandcamp.com/merch/wbtw-vinyl-sticker-pack?campaign=website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProductImage src="/fire sticker.jpg" alt="wbtw-fire-sticker" />
        </a>
        <ProductPrice>$5</ProductPrice>
        <p>
          <a
            href="https://webroketheweather.bandcamp.com/merch/wbtw-vinyl-sticker-pack?campaign=website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProductButton>order on bandcamp</ProductButton>
          </a>
        </p>
      </ProductSection>

      <Divider />
    </div>
  )
}

export default Merch
