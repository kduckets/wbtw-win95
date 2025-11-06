import styled, { keyframes } from "styled-components"
import { NavLink } from "react-router-dom"

const fogAnimation = keyframes`
  0% {
    transform: translateX(-100%) translateY(0);
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(100%) translateY(-20px);
    opacity: 0.3;
  }
`

const fogAnimation2 = keyframes`
  0% {
    transform: translateX(100%) translateY(0);
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: translateX(-100%) translateY(20px);
    opacity: 0.2;
  }
`

const BSODContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0000AA;
  color: #FFFFFF;
  font-family: 'Perfect DOS', 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  position: relative;
  overflow: hidden;
`

const FogLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%,
    transparent 100%
  );
  animation: ${fogAnimation} 20s ease-in-out infinite;
  pointer-events: none;
`

const FogLayer2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 30%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.05) 70%,
    transparent 100%
  );
  animation: ${fogAnimation2} 30s ease-in-out infinite;
  pointer-events: none;
`

const BSODContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: left;
  line-height: 1.6;
`

const BSODTitle = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
`

const BSODMessage = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  white-space: pre-wrap;
`

const BSODError = styled.div`
  font-size: 14px;
  margin: 30px 0;
  padding: 20px;
  border: 2px solid #FFFFFF;
  background-color: rgba(0, 0, 0, 0.2);
`

const BSODFooter = styled.div`
  font-size: 14px;
  margin-top: 30px;
  text-align: center;
`

const BSODLink = styled(NavLink)`
  color: #FFFFFF;
  text-decoration: none;
  border-bottom: 1px solid #FFFFFF;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

function ErrorPage() {
  return (
    <BSODContainer>
      <FogLayer />
      <FogLayer2 />
      <BSODContent>
        <BSODTitle>Windows</BSODTitle>

        <BSODMessage>
          A fatal exception 404 has occurred at 0028:C001E36 in VXD VMM(01) + 00010E36. The current application will be
          terminated.
        </BSODMessage>

        <BSODError>
          * Press any key to terminate the current application.{"\n"}* Press CTRL+ALT+DEL again to restart your
          computer. You will{"\n"}
          &nbsp;&nbsp;lose any unsaved information in all applications.{"\n"}
          {"\n"}
          Error: PAGE_NOT_FOUND
        </BSODError>

        <BSODMessage>
          The page you are looking for might have been removed, had its{"\n"}
          name changed, or is temporarily unavailable.
        </BSODMessage>

        <BSODFooter>
          Press <BSODLink to="/">any key</BSODLink> to continue _
        </BSODFooter>
      </BSODContent>
    </BSODContainer>
  )
}

export default ErrorPage
